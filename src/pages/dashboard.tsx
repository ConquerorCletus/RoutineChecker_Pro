import React from 'react';
import Navbar from '@/components/dNavbar';
import Banner from '@/components/banner';
import TaskCard from '@/components/stat';
import Tasktab from '@/components/Tasktab';

const dashboard = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <TaskCard />
      <Tasktab />
    </>
  );
};

export default dashboard;
