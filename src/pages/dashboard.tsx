import React, { useState } from 'react';
import Navbar from '@/components/dNavbar';
import Banner from '@/components/banner';
import TaskCard from '@/components/stat';
import Tasktab from '@/components/Tasktab';
// import Footer from '@/components/footer';
import PrivateRoute from '@/components/PrivateRoute';

const dashboard = () => {
  // const [tasks, setTasks] = useState([]);
  return (
    <>
      <PrivateRoute>
        <Navbar />
        <Banner />
        <TaskCard />
        <Tasktab />
      </PrivateRoute>
      {/* <Footer /> */}
    </>
  );
};

export default dashboard;
