import React from 'react';
import { auth } from '@/helpers/firebase';
import Image from 'next/image';

const banner = () => {
  return (
    <>
      <div className='Banner p-10 justify-between'>
        <div className='ml-20 rounded-full w-40 h-40 border-double border-4 border-slate-50'>
          <Image
            src='/picon.png' // Provide the correct path to the image
            alt='Profile Icon'
            layout='responsive'
            width={160}
            height={160}
            objectFit='cover'
            className='rounded-full'
          />
        </div>
        <div className='justify-center align-middle h-fit my-auto'>
          {' '}
          <h1 className='font-sans text-5xl text-white text-center my-auto'>
            Welcome Back, User
            {auth.currentUser ? auth.currentUser.displayName : 'user '}
          </h1>
          <p className='font-serif text-xl text-white text-center mt-20'>
            I must always be on time
          </p>
        </div>
      </div>
    </>
  );
};

export default banner;
