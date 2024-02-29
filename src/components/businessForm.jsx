// components/TaskAssignmentForm.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../helpers/firebase';
import { TiBusinessCard } from 'react-icons/ti';

const TaskAssignmentForm = () => {
  const [taskDetails, setTaskDetails] = useState({
    employeeEmail: '',
    title: '',
    description: '',
    deadline: '',
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesCollection = collection(db, 'employees');
        const querySnapshot = await getDocs(employeesCollection);
        const employeeList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
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
      await axios.post('/api/send-email', {
        to: taskDetails.employeeEmail,
        subject: 'Task Assignment',
        text: `Task: ${taskDetails.title}\nDescription: ${taskDetails.description}\nDeadline: ${taskDetails.deadline}`,
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
    <div className='rounded-md w-[50%] h-[50vh] bg-slate-100 my-auto flex flex-col mx-auto  border-slate-700 border-[5px] border-double'>
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
      {/* Add other form fields as needed */}

      <button
        className='bg-blue-600 rounded-lg h-[50px] w-40 mx-auto text-slate-50 mt-5 hover:bg-slate-500'
        onClick={handleAssignTask}
      >
        Assign Task
      </button>
    </div>
  );
};

export default TaskAssignmentForm;
