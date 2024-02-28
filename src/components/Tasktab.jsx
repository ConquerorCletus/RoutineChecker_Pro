import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { db, auth } from '../helpers/firebase';
import {
  doc,
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import PrivateRoute from './PrivateRoute';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const currentDate = new Date();
const userId = auth.currentUser?.uid;
const myTask = userId
  ? query(collection(db, 'tasks'), where('userId', '==', userId))
  : null;

export default function Tasktab() {
  const [categories, setCategories] = useState({
    All: [],
    Completed: [],
    unfinished: [],
    // ... other category structures
  });

  const [editingTask, setEditingTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (myTask) {
      const unSubscribe = onSnapshot(myTask, (querySnapshot) => {
        const recentTasks = [];
        recentTasks.length = 0;

        querySnapshot.forEach((taskdetails) => {
          const taskData = taskdetails.data();
          const timelogged = new Date(taskData.timeLogged);
          let formattedDate;

          const timeDifferenceInMilliseconds = currentDate - timelogged;
          const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
          if (seconds < 60) {
            formattedDate = `${seconds} seconds ago`;
          } else if (seconds < 3600) {
            const minutes = Math.floor(seconds / 60);
            formattedDate = `${minutes} minutes ago`;
          } else if (seconds < 86400) {
            const hours = Math.floor(seconds / 3600);
            formattedDate = `${hours} hours ago`;
          } else {
            const days = Math.floor(seconds / 86400);
            formattedDate = `${days} days ago`;
          }

          const formattedTask = {
            id: taskdetails.id,
            title: taskData.task,
            description: taskData.description,
            completed: taskData.completed,
            date: formattedDate,
          };

          recentTasks.push(formattedTask);
        });

        // setCategories((prevCategories) => ({
        //   ...prevCategories,
        //   All: [...prevCategories.All, ...recentTasks],
        // }));

        setCategories((prevCategories) => ({
          ...prevCategories,
          All: recentTasks,
          Completed: recentTasks.filter((task) => task.completed),
          unfinished: recentTasks.filter((task) => !task.completed),
        }));
        setLoading(false);
      });

      return () => unSubscribe();
    }
  }, [myTask]);

  if (loading) {
    return <Spinner />;
  }

  const handleEditClick = (taskId, currentTitle, currentDescription) => {
    setEditingTask(taskId);
    setEditedTitle(currentTitle);
    setEditedDescription(currentDescription);
  };

  const handleSaveClick = async () => {
    // Update the task in the database
    try {
      // Update the task in the database
      const taskRef = doc(db, 'tasks', editingTask);
      await updateDoc(taskRef, {
        task: editedTitle,
        description: editedDescription,
      });

      toast.success('Task updated successfully');
    } catch (error) {
      toast.error('Failed to update task');
    }

    // Reset editing state
    setEditingTask(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(db, 'tasks', userId));
      toast.success('Task Deleted successfully');
    } catch (error) {
      toast.error('Task Deleted failed');
    }
  };
  const handleCheckboxChange = async (taskId, completed) => {
    try {
      const taskRef = doc(db, 'tasks', taskId);
      await updateDoc(taskRef, {
        completed: !completed,
      });

      toast.success('Task status updated successfully');
    } catch (error) {
      toast.error('Failed to update task status');
    }
  };

  return (
    <PrivateRoute>
      <div className='w-full px-2 py-2 sm:px-0'>
        <Tab.Group>
          <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-2'>
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className='relative rounded-md p-3 hover:bg-gray-100'
                    >
                      {editingTask === post.id ? (
                        // Render input fields during editing
                        <>
                          <input
                            type='text'
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className='inline w-[20%] h-10 border-black border-[1px] text-center my-auto'
                          />
                          <textarea
                            value={editedDescription}
                            onChange={(e) =>
                              setEditedDescription(e.target.value)
                            }
                            className='inline w-[65%] h-10 border-black border-[1px] ml-3 text-center my-auto'
                          />
                          <button
                            className='inline-block py-[14px] px-[32px] sm:py-3 sm:px-6 cursor-pointer text-center rounded-md border-[2px] border-solid float-right bg-blue-600 text-white'
                            onClick={handleSaveClick}
                          >
                            Save
                          </button>
                        </>
                      ) : (
                        // Render title, description, and edit/delete icons
                        <>
                          <h3 className='text-sm font-medium leading-5'>
                            {post.title}
                          </h3>
                          <input
                            className='float-right mb-5 mr-10'
                            type='checkbox'
                            name='checkcompleted'
                            id=''
                            checked={post.completed}
                            onChange={() =>
                              handleCheckboxChange(post.id, post.completed)
                            }
                          />

                          <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                            <li>{post.description}</li>
                            <li>&middot;</li>
                            <li>{post.date} comments</li>
                          </ul>
                          <div className='flex items-center space-x-2 float-right'>
                            <AiOutlineEdit
                              onClick={() =>
                                handleEditClick(
                                  post.id,
                                  post.title,
                                  post.description
                                )
                              }
                              className='text-xl text-blue-400 cursor-pointer hover:text-2xl'
                            />
                            <AiOutlineDelete
                              onClick={() => handleDelete(post.id)}
                              className='text-xl text-red-500 cursor-pointer hover:text-2xl'
                            />
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </PrivateRoute>
  );
}
