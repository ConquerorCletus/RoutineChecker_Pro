import React, { useState } from 'react';
import Navbar from '@/components/dNavbar';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../helpers/firebase';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FiCalendar } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import Tasktab from '../components/Tasktab';
import Spinner from '../components/Spinner';
import PrivateRoute from '../components/PrivateRoute';

const taskpage = () => {
  const currentDate = new Date();
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [task, setTask] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [Loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      //save task into DB
      addDoc(collection(db, 'tasks'), {
        task: task.trim(),
        description: taskDescription.trim(),
        timeLogged: currentDate,
        deadline: selectedDateTime,
        userId: auth.currentUser.uid,
      });
      toast.success('Task added successfully sent!');
      setTask('');
      setTaskDescription('');
      setSelectedDateTime(null);
    } catch (error) {
      toast.error('Error adding task:' + error.message);
    }
  };

  return (
    <>
      <PrivateRoute>
        <Navbar />
        <div className='Banner w-full h-[70vh] items-center flex flex-col justify-between'>
          <form
            className='rounded-md w-[50%] h-[50vh] bg-slate-100 my-auto flex flex-col'
            onSubmit={handleSubmit}
          >
            <h4 className='mt-2 text-2xl font-bold font-serif mx-auto flex items-center text-slate-800'>
              <AiOutlineFieldTime />
              Create a new Task
            </h4>
            <input
              className='w-2/3 h-[50px] text-center mx-auto rounded-md border-2 my-2'
              placeholder='Task title'
              type='text'
              name=''
              id='task'
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <textarea
              placeholder='Task Description'
              className='text-center w-2/3 h-[70px] mx-auto rounded-md border-2 my-2'
              name='Task Description'
              id='taskDescription'
              cols='25'
              rows='5'
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <div className='w-fit h-fit mx-auto justify-between flex gap-x-2'>
              <FiCalendar className='my-auto ml-2' />
              {/* <div className='relative max-w-sm'> */}
              <DatePicker
                //   calendarIcon={<FiCalendar />}
                className='inline rounded-md text-slate-900 text-center'
                calendarAriaLabel='Select date and time'
                placeholderText='Deadline'
                selected={selectedDateTime}
                onChange={(date) => setSelectedDateTime(date)}
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat='MMMM d, yyyy h:mm aa'
                minDate={new Date()}
              />
              {/* </div> */}
            </div>
            <input
              className='py-[14px] px-[32px] w-30 border-solid border-slate-950 border-[1px] cursor-pointer mx-auto mt-5 rounded-md hover:bg-blue-600 hover:text-white'
              type='submit'
              value='Submit'
            >
              {/* {<Spinner /> ? 'Loading please wait' : 'Create Task'} */}
            </input>
          </form>
        </div>
        <section className='h-fit w-full'>
          <Tasktab />
        </section>
      </PrivateRoute>
    </>
  );
};

export default taskpage;
