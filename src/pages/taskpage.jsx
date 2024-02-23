import React, { useState } from 'react';
import Navbar from '@/components/dNavbar';
import { AiOutlineFieldTime } from 'react-icons/ai';
import DateTimePicker from 'react-datetime-picker';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const taskpage = () => {
  //   const [value, onChange] = useState < ValuePiece > new Date();
  return (
    <>
      <Navbar />
      <div className='w-full h-[70vh] items-center flex flex-col justify-between bg-blue-600'>
        <form
          className='rounded-md w-[50%] h-[50vh] bg-slate-100 my-auto flex flex-col'
          action=''
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
            id=''
          />
          <input
            placeholder='Task Description'
            className='text-center w-2/3 h-[70px] mx-auto rounded-md border-2 my-2'
            name='Task Description'
            id=''
            cols='25'
            rows='5'
          />
          <div className='w-2/3 mx-auto justify-between flex'>
            <p className='inline text-md font-sans '>Deadline</p>
            <input
              className='inline'
              placeholder='Select date and time'
              aria-label='Date and time'
              type='datetime-local'
            />
            {/* <DateTimePicker onChange={onChange} value={value} /> */}
          </div>
          <input
            className='py-[14px] px-[32px] border-solid border-slate-950 border-[1px]cursor-pointer'
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    </>
  );
};

export default taskpage;
