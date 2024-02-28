import { FaTasks } from 'react-icons/fa';
import { GrTask } from 'react-icons/gr';
import { BsListTask } from "react-icons/bs";

const TaskStats = () => {
  return (
    <section className='bg-white p-5 m-3 rounded border-slate-700 border-[1.5px]'>
      <h4 className='font-semibold text-[15px]'>Task Stats</h4>
      <div className='flex flex-col lg:flex-row items-center gap-5 mt-5 '>
        <TaskStatItem icon={<FaTasks className='h-10 w-10' />} numberOfTasks='0' label='All Task' />
        <TaskStatItem icon={<GrTask className='h-10 w-10'/>} numberOfTasks='0' label='Completed' />
        <TaskStatItem
          icon={<BsListTask className='h-10 w-10' />}
          numberOfTasks='0'
          label='Uncompleted'
        />
      </div>
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
