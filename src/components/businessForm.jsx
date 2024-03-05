// components/TaskAssignmentForm.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db, auth } from '../helpers/firebase';
import { TiBusinessCard } from 'react-icons/ti';
import { FiCalendar } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PrivateRoute from './PrivateRoute';

const TaskAssignmentForm = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [taskDetails, setTaskDetails] = useState({
    employeeEmail: '',
    title: '',
    description: '',
    // deadline: '',
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        // const userId = auth.currentUser?.uid;
        const employeesCollection = collection(db, 'employees');
        // const querySnapshot = await getDocs(
        //   query(employeesCollection, where('userId', '==', userId))
        // );
        const querySnapshot = await getDocs(employeesCollection);
        const employeeList = querySnapshot.docs.map((doc) => ({
          // id: doc.id,
          email: doc.data().email,
        }));
        setEmployees(employeeList);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleAssignTask = async () => {
    try {
      await axios.post('/api/sendEmail', {
        to: taskDetails.employeeEmail,
        subject: 'Task Assignment',
        text: `Task: ${taskDetails.title}\nDescription: ${taskDetails.description}\nDeadline: ${taskDetails.deadline}`,
      });

      await addDoc(collection(db, 'businessTask'), {
        employeeEmail: taskDetails.employeeEmail,
        title: taskDetails.title,
        description: taskDetails.description,
        userId: auth.currentUser.uid,
        deadline: taskDetails.deadline,
      });

      // Handle success
      toast.success('Task sent successfully');
      setTaskDetails('');
    } catch (error) {
      // Handle error
      toast.error('Error sending Task:', error);
    }
  };

  return (
    <PrivateRoute>
      <div className='rounded-md w-[50%] h-[70vh] bg-slate-100 my-auto flex flex-col mx-auto  border-slate-700 border-[5px] border-double'>
        <h4 className='mt-2 text-xl font-semibold font-serif mx-auto flex items-center text-slate-800'>
          <TiBusinessCard className='mr-3' />
          Create a new Task for employee
        </h4>

        <label
          className='mx-auto mt-5 text-center text-lg font-medium font-serif'
          htmlFor='employeeSelect'
        >
          Select Employee:
        </label>
        <select
          className='mt-2 text-center border-2 border-slate-950 w-2/3 mx-auto'
          id='employeeSelect'
          value={taskDetails.employeeEmail}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, employeeEmail: e.target.value })
          }
        >
          <option value='' disabled>
            Select an employee
          </option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.email}>
              {employee.email}
            </option>
          ))}
        </select>

        {/* Other form inputs go here */}
        {/* For example: */}
        <input
          className='w-2/3 h-[50px] text-center mx-auto rounded-md border-2 my-2'
          type='text'
          placeholder='Task title'
          value={taskDetails.title}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, title: e.target.value })
          }
        />
        <textarea
          placeholder='Task Description'
          className='text-center w-2/3 h-[70px] mx-auto rounded-md border-2 my-2'
          value={taskDetails.description}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, description: e.target.value })
          }
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
        {/* Add other form fields as needed */}

        <button
          className='bg-blue-600 rounded-lg h-[50px] w-40 mx-auto text-slate-50 mt-2 hover:bg-slate-500'
          onClick={handleAssignTask}
        >
          Assign Task
        </button>
      </div>
    </PrivateRoute>
  );
};

export default TaskAssignmentForm;
