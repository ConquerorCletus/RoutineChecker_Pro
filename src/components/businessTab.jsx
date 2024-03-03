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
const myBusiness = userId
  ? query(collection(db, 'businessTask'), where('userId', '==', userId))
  : null;

export default function BusinessTab() {
  const [categories, setCategories] = useState({
    All: [],
    Completed: [],
    Unfinished: [],
    // ... other category structures
  });

  const [editingBusiness, setEditingBusiness] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (myBusiness) {
      const unSubscribe = onSnapshot(myBusiness, (querySnapshot) => {
        const recentBusinesses = [];

        querySnapshot.forEach((businessDetails) => {
          const businessData = businessDetails.data();
          const timelogged = new Date(businessData.timeLogged);
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

          const formattedBusiness = {
            id: businessDetails.id,
            employee: businessDetails.employee,
            title: businessData.title,
            description: businessData.description,
            completed: businessData.completed,
            deadline: businessData.deadline,
          };

          recentBusinesses.push(formattedBusiness);
        });

        setCategories((prevCategories) => ({
          ...prevCategories,
          All: recentBusinesses,
          Completed: recentBusinesses.filter((business) => business.completed),
          Unfinished: recentBusinesses.filter(
            (business) => !business.completed
          ),
        }));
        setLoading(false);
      });

      return () => unSubscribe();
    }
  }, [myBusiness]);

  if (loading) {
    return <Spinner />;
  }

  const handleEditClick = (businessId, currentTitle, currentDescription) => {
    setEditingBusiness(businessId);
    setEditedTitle(currentTitle);
    setEditedDescription(currentDescription);
  };

  const handleSaveClick = async () => {
    // Update the business in the database
    try {
      const businessRef = doc(db, 'businessTask', editingBusiness);
      await updateDoc(businessRef, {
        title: editedTitle,
        description: editedDescription,
      });

      toast.success('Business updated successfully');
    } catch (error) {
      toast.error('Failed to update business');
    }

    // Reset editing state
    setEditingBusiness(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleDelete = async (businessId) => {
    try {
      await deleteDoc(doc(db, 'businessTask', businessId));
      toast.success('Business Deleted successfully');
    } catch (error) {
      toast.error('Business Deleted failed');
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
            {Object.values(categories).map((businesses, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {businesses.map((business) => (
                    <li
                      key={business.id}
                      className='relative rounded-md p-3 hover:bg-gray-100'
                    >
                      {editingBusiness === business.id ? (
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
                            {business.title}
                          </h3>

                          <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                            <li>{business.description}</li>
                            <li>&middot;</li>
                            <li>{business.date}</li>
                            <li>&middot;</li>
                            <li>{business.deadline}</li>
                          </ul>
                          <div className='flex items-center space-x-2 float-right'>
                            <AiOutlineEdit
                              onClick={() =>
                                handleEditClick(
                                  business.id,
                                  business.title,
                                  business.description
                                )
                              }
                              className='text-xl text-blue-400 cursor-pointer hover:text-2xl'
                            />
                            <AiOutlineDelete
                              onClick={() => handleDelete(business.id)}
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
