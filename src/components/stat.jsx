import { useEffect, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { GrTask } from 'react-icons/gr';
import { BsListTask } from 'react-icons/bs';
// import PrivateRoute from './PrivateRoute';
import { getTasksByUserId } from '../helpers/getTask';
import { toast } from 'react-toastify';

const TaskStats = () => {
  const [categories, setCategories] = useState({
    All: [],
    Completed: [],
    Uncompleted: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await getTasksByUserId(); // Fetch tasks from Firebase
        // Process tasks and update categories state
        setCategories({
          All: tasks,
          Completed: tasks.filter((task) => task.completed),
          Uncompleted: tasks.filter((task) => !task.completed),
        });
      } catch (error) {
        console.log('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, []);

  const calculateTaskCount = (category) => {
    return categories[category]?.length || 0;
  };

  return (
    <section className='bg-white p-5 m-3 rounded border-slate-700 border-[1.5px]'>
      {/* <PrivateRoute> */}
        <h4 className='font-semibold text-[15px]'>Task Stats</h4>
        <div className='flex flex-col lg:flex-row items-center gap-5 mt-5 '>
          <TaskStatItem
            icon={<FaTasks className='h-10 w-10' />}
            numberOfTasks={calculateTaskCount('All')}
            label='All Task'
          />
          <TaskStatItem
            icon={<GrTask className='h-10 w-10' />}
            numberOfTasks={calculateTaskCount('Completed')}
            label='Completed'
          />
          <TaskStatItem
            icon={<BsListTask className='h-10 w-10' />}
            numberOfTasks={calculateTaskCount('unfinished')}
            label='Uncompleted'
          />
        </div>
      {/* </PrivateRoute> */}
    </section>
  );
};

const TaskStatItem = ({ icon, numberOfTasks, label }) => {
  return (
    <div className='flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border-slate-700 border-[1px] rounded'>
      {icon}
      <div className='text-center'>
        <h2 className='text-4xl font-bold pb-2'>{numberOfTasks}</h2>
        <h4 className='inline text-gray-500 text-md'>{label}</h4>
      </div>
    </div>
  );
};

export default TaskStats;
