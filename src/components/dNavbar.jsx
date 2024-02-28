import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
// next imports
import Link from 'next/link';
import Image from 'next/image';
// React icon imports
import {
  FaChevronDown,
  FaRegUser,
  FaSignOutAlt,
  FaTasks,
} from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { RxLapTimer } from 'react-icons/rx';

const dNavbar = () => {
  return (
    <div className='w-full h-[50px] mx-auto flex justify-between bg-slate-50 border-slate-950 border-b-[1px]'>
      <div className='w-[350px] h-10 my-auto'>
        <Link href='/dashboard'>
          <div className='relative w-full h-full'>
            <Image
              src='/Routinepro.png'
              layout='fill'
              objectFit='contain'
              // width={320}
              // height={20}
              alt='logo'
            />
          </div>
        </Link>
      </div>
      <div className='w-1/2 h-fit justify-center align-middle my-auto'>
        <form className='flex mx-auto ' action='' method='get'>
          <input
            className='my-auto w-5/6 h-10 text-center rounded-l-[8px] border-2 border-x-slate-700'
            type='search'
            name=''
            id=''
            placeholder='search Task'
          />
          <input
            className='border-2 border-y-slate-700 rounded-r-[8px] h-10 text-white bg-blue-600 py-[8px] px-[22px] '
            type='button'
            value='search'
          />
        </form>
      </div>
      <div className='flex w-fit mr-5 my-auto'>
        <Menu as='div' className='h-10 w-50 bg-slate-700'>
          <Menu.Button
            type='button'
            className='group inline-flex object-cover items-center text-sm font-semibold text-gray-900 py-[8px] px-[10px] border-[1px] border-slate-700 rounded-none mt-[1px] mb-[1px] transition-all duration-300 hover:bg-slate-500'
            aria-expanded='false'
          >
            <span className=' text-slate-50'>Personal</span>
            <FaChevronDown
              className='group-hover:text-blue-400 m-0.5 text-slate-50'
              aria-hidden='true'
            />
          </Menu.Button>
          <Transition
            // as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            {' '}
            <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='/taskpage'
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaTasks className='mr-2' />
                      New Task
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='/calendar'
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaCalendarCheck className='mr-2' />
                      Mark Calendar
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='/dashboard'
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <RxLapTimer className='mr-2' />
                      dashboard
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='/profile'
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaRegUser className='mr-2' />
                      Profile
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='/'
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaSignOutAlt className='mr-2' />
                      Logout
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
          {/* <button
          type='button'
          className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 py-[8px] px-[15px] border-[1px] border-slate-700 rounded-r-lg mt-[1px] mb-[1px]'
          aria-expanded='false'
        >
          Business
        </button> */}
        </Menu>
        <button
          type='button'
          className='group inline-flex bg-blue-600 text-slate-50 h-10 w-50 items-center gap-x-1 text-sm font-semibold leading-6 py-[8px] px-[10px] border-[1px] border-slate-700 rounded-none mt-[1px] mb-[1px] transition-all duration-300 hover:bg-slate-500'
          aria-expanded='false'
        >
          Business
        </button>
      </div>
    </div>
  );
};

export default dNavbar;
