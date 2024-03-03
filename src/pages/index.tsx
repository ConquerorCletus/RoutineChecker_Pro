import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { MdNotificationsActive } from 'react-icons/md';
import { FaClock, FaLock, FaChartLine, FaUsers } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import About from '../components/about';
import Team from '../components/team';
import Contact from '../components/contact';
import Footer from '../components/footer';
// import { Link } from "react-router-dom";
import task from '../images/task.png';
import work from '../images/work.png';
import management from '../images/Timemanagement.jpg';

const Homepage: React.FC = () => {
  const scrollToPreviousSection = () => {
    const previousSection = document.getElementById('footer');
    // const previousSection = currentSection?.previousElementSibling;

    if (previousSection) {
      previousSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* <div> */}
      <section className='pb-12' id='landpage-section'>
        <Navbar />
        <div className='relative container px-4 mx-auto'>
          <div className='flex flex-wrap -mx-4 items-center mb-16'>
            <div className='sec1-div w-full px-4 mb-20 mt-20 lg:mb-0 text-center text-white'>
              <h1 className='font-heading text-4xl md:text-5xl mb-6'>
                Achieve more <span style={{ color: 'blue' }}>Stress less</span>
              </h1>
              <p className='fparagraph text-2xl leading-8 mb-10 px-2'>
                Effortlessly manage and track your tasks to enhance productivity
                and achieve your goals. Stay organized; <br /> additionally, you
                can efficiently oversee your business using our employee task
                tracking feature on our application.
              </p>
              <div className='button-div sm:flex items-center justify-center'>
                <Link
                  href='/login'
                  className='inline-block w-full sm:w-auto py-4 px-6 mb-4 sm:mb-0 sm:mr-4 text-center font-heading font-medium text-base text-white bg-blue-700 rounded-sm hover:bg-blue-500 hover:border-green-600 transition duration-200'
                >
                  Start taking control of your time today!
                </Link>
                <Link
                  href='/register'
                  className='inline-block w-full sm:w-auto py-4 px-6 mb-4 sm:mb-0 sm:mr-4 text-center font-heading font-medium text-base text-white bg-orange-400 hover:bg-blue-500 hover:border-green-600  transition duration-200'
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <FiArrowDown
            onClick={scrollToPreviousSection}
            className='animate-bounce float-right'
            size={26}
            color='White'
          />
        </div>
        <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
          <div className='navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80' />
        </div>
      </section>

      <section className='bg-stone-100' id='Features'>
        <div className='bg-stone-100'>
          <div className='contain px-4 mx-auto bg-stone-100'>
            <div className='max-w-md xl:max-w-lg'>
              <h1 className='mt-2 mb-3 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300'>
                Features
              </h1>
              <p className='max-w-md text-lg font-medium leading-8'>
                Effortlessly track and manage tasks based on different time
                periods such as weeks, months, and overall total. The
                application allows users to view and analyze their task data
                according to specific time ranges. Users can easily calculate
                and monitor the total time spent on tasks for each period.
              </p>
              <div className='f-div flex items-center mb-4'>
                <div className='flex items-center justify-center w-12 h-12 p-3 mr-6 bg-white rounded'>
                  <FaClock size={20} color='blue' />
                </div>
                <span className='font-heading font-medium'>Authentication</span>
              </div>
              {/* <div className='f-div flex items-center mb-4'>
                <div className='flex items-center justify-center w-12 h-12 p-3 mr-6 bg-white rounded'>
                  <FaLock size={20} color='blue' />
                </div>
                <span className='font-heading font-medium'>
                  Protected Routes
                </span>
              </div> */}
              <div className='flex items-center'>
                <div className='flex items-center justify-center w-12 h-12 p-3 mr-6 bg-white rounded'>
                  <FaChartLine size={20} color='blue' />
                </div>
                <span className='font-heading font-medium'>
                  Track Tasks by days, Weeks and Months
                </span>
              </div>
              <div className='flex items-center'>
                <div className='flex items-center justify-center w-12 h-12 p-3 mr-6 bg-white rounded'>
                  <FaUsers size={20} color='blue' />
                </div>
                <span className='font-heading font-medium'>
                  Track and manage employee task
                </span>
              </div>
              <div className='flex items-center'>
                <div className='flex items-center justify-center w-12 h-12 p-3 mr-6 bg-white rounded'>
                  <MdNotificationsActive size={20} color='blue' />
                </div>
                <span className='font-heading font-medium'>
                  Email Task notifications
                </span>
              </div>
            </div>
            <Image
              src={task}
              alt='task'
              className='block mx-auto xl:mx-0 width:50px height:100px'
              width={500}
              height={650}
            />
          </div>
        </div>
      </section>

      {/* <Team /> */}
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
