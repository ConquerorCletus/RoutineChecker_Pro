import React from 'react';
import Navbar from '@/components/dNavbar';
import Form from '@/components/businessForm';
import BusinessTab from '../components/businessTab';

const businessTask = () => {
  return (
    <>
      <Navbar />
      <section className='Banner h-[80vh] w-[100vw]'>
        <Form />
      </section>
      <section>
        <BusinessTab />
      </section>
    </>
  );
};

export default businessTask;
