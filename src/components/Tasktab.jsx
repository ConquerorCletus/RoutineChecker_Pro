import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { db, auth } from '../helpers/firebase';
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import PrivateRoute from './PrivateRoute';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const currentDate = new Date();
const userId = auth.currentUser?.uid;
const myTask = query(collection(db, 'tasks'), where('userId', '==', userId));

export default function Tasktab() {
  const [categories, setCategories] = useState({
    All: [],
    Completed: [],
    unfinished: [],
    // ... other category structures
  });
  useEffect(() => {
    const unSubscribe = onSnapshot(myTask, (querySnapshot) => {
      const recentTasks = [];
      recentTasks.length = 0;

      querySnapshot.forEach((taskdetails) => {
        const taskData = taskdetails.data();
        const timelogged = new Date(taskData.timeLogged);
        let formattedDate; // Declare formattedDate outside the conditional blocks

        const timeDifferenceInMilliseconds = currentDate - timelogged;
        const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
        if (seconds < 60) {
          // Less than a minute
          formattedDate = `${seconds} seconds ago`;
        } else if (seconds < 3600) {
          // Less than an hour
          const minutes = Math.floor(seconds / 60);
          formattedDate = `${minutes} minutes ago`;
        } else if (seconds < 86400) {
          // Less than a day
          const hours = Math.floor(seconds / 3600);
          formattedDate = `${hours} hours ago`;
        } else {
          // More than a day
          const days = Math.floor(seconds / 86400);
          formattedDate = `${days} days ago`;
        }

        const formattedTask = {
          id: doc.id,
          title: taskData.task,
          description: taskData.description,
          date: formattedDate,
          // ... other properties you want to include
        };
        recentTasks.push(formattedTask);
      });
      setCategories((prevCategories) => ({
        ...prevCategories,
        All: [...prevCategories.All, ...recentTasks],
      }));
    });
    return () => unSubscribe();
  }, []);

  return (
    
    <div className='w-full px-2 py-2 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
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
                    <h3 className='text-sm font-medium leading-5'>
                      {post.title}
                    </h3>

                    <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                      <li>{post.description}</li>
                      <li>&middot;</li>
                      <li>{post.date} comments</li>
                      {/* <li>&middot;</li>
                      <li>{post.shareCount} shares</li> */}
                      {/* </ul> */}
                    </ul>

                    <a
                      href='#'
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
