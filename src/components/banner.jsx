import React from 'react';
// import { auth } from '@/helpers/firebase';

const banner = () => {
  return (
    <>
      <div className='Banner p-10 justify-between'>
        <div className='rounded-full w-40 h-40 border-double border-4 border-slate-500'></div>
        <div className='justify-center align-middle h-fit my-auto'>
          {' '}
          <h1 className='font-heading text-5xl text-white text-center my-auto'>
            Welcome Back, User
            {/* {auth.currentUser
              ? auth.currentUser.displayName || 'user name'
              : 'user'} */}
          </h1>
        </div>
      </div>
    </>
  );
};

export default banner;
