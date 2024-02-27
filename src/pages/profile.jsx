import React from 'react';
import Navbar from '../components/dNavbar';

const profile = () => {
  return (
    <>
      <Navbar />

      <section className='h-full w-full bg-blue-700 flex items-center justify-center'>
        <div className='w-30 h-30 rounded-full border-[2px] border-solid'>
          <input
            type='image'
            src=''
            alt=''
            className='bg-slate-50 rounded-full object-cover'
          />
        </div>

        <form action='' className='flex h-full flex-col'>
          <div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Your Name'
              className='w-44 h-10 border border-gray-300 rounded-md px-3'
            />
          </div>
          <div>
            <input
              type='text'
              name=''
              id=''
              placeholder='e.g I must always be on time'
              className='w-64 h-10 border border-gray-300 rounded-md px-3'
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default profile;
