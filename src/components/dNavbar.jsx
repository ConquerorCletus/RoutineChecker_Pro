import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
// next imports
import Link from 'next/link';
import Image from 'next/image';
// React icon imports
import { FaChevronDown, FaRegUser,  FaSignOutAlt, FaTasks } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { RxLapTimer } from 'react-icons/rx';

const dNavbar = () => {
  return (
    <div className='w-full h-[50px] mx-auto flex justify-between bg-slate-50 border-slate-950 border-b-[1px]'>
      <div className='my-auto'>
        <h1 className='text-3xl font-bold font-serif'>
          Routine<span className='text-blue-600'>Checker</span>
        </h1>
      </div>
      <div className='w-1/2 justify-center align-middle'>
        <form className='flex mx-auto' action='' method='get'>
          <input
            className='my-auto w-5/6 h-10 text-center rounded-l-[8px] border-2 '
            type='search'
            name=''
            id=''
            placeholder='search Task'
          />
          <input
            className='border-2 rounded-r-[8px] text-white bg-blue-600 py-[8px] px-[22px] '
            type='button'
            value='search'
          />
        </form>
      </div>
      <div className='flex w-fit mr-2 '>
        <Menu as='div' className='mx-auto'>
          <Menu.Button
            type='button'
            className='inline-flex h-50 items-center text-sm font-semibold leading-6 text-gray-900 py-[8px] px-[10px] border-[1px] border-slate-700 rounded-l-lg mt-[1px] mb-[1px]'
            aria-expanded='false'
          >
            <span>Individual</span>
            <FaChevronDown
              className='hover:text-blue-400 m-0.5'
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
                    <button
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaTasks className='mr-2' />
                      New Task
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaCalendarCheck className='mr-2' />
                      Mark Calendar
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <RxLapTimer className='mr-2' />
                      Pomodoro timer
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaRegUser className='mr-2' />
                      Profile
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaSignOutAlt className='mr-2' />
                      Logout
                    </button>
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
          className='inline-flex h-relative items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 py-[8px] px-[10px] border-[1px] border-slate-700 rounded-r-lg mt-[1px] mb-[1px]'
          aria-expanded='false'
        >
          Business
        </button>
      </div>
    </div>
  );
};

export default dNavbar;
