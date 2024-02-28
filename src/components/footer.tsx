import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Footer = () => {
  const customColor = '#5b818a';
  const Form = useRef();
  const [email, setEmail] = useState('');

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_bu5l0nb', 'template_9u8k3ro', Form.current, {
  //       publicKey: 'GAzdmQee5ZBJjuiqE',
  //     })
  //     .then(
  //       () => {
  //         toast.success('Message successfully sent!');
  //         window.location.reload(false);
  //       },
  //       (error) => {
  //         toast.error('Failed to send the message, please try again');
  //       }
  //     );
  // };

  return (
    <section id='footer' className='flex flex-col h-fit lg:justify-end font-poppins'>
      <div
        // style={{ backgroundColor: customColor }}
        className='w-full pt-11 bg-blue-500 dark:bg-gray-900 '
      >
        <div className='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0'>
          <div
            id='Quotation'
            className='flex flex-wrap items-center justify-between pb-4 border-b border-gray-500 dark:border-gray-700 lg:justify-between'
          >
            {/* <h2 className='mb-4 text-2xl font-semibold tracking-wider text-gray-300 lg:mb-0 dark:text-gray-400'>
              Request a Quotation from us.
            </h2>
            <form className='flex flex-wrap'>
              <div className='w-full py-1 mb-2 lg:flex-1 lg:py-0 lg:mr-3 lg:mb-0'>
                <input
                  type='email'
                  className='inline-block w-full h-12 px-3 text-gray-700 placeholder-gray-500 border rounded-md text-center dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700'
                  placeholder='Your E-mail'
                  name='email'
                />
              </div>
              <div className='w-full py-1 lg:w-auto lg:py-0'>
                <button
                  type='submit'
                  className='inline-block w-full px-5 py-4 font-medium leading-4 text-center text-slate-100 border-slate-50 border-[2px] rounded-md dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-slate-700'
                >
                  Request
                </button>
              </div>
            </form> */}
          </div>
          <div className='flex flex-wrap py-10 -mx-3'>
            <div className='w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0'>
              <a
                href='#'
                className='inline-block mb-4 text-xl font-bold text-gray-200 dark:text-gray-400'
              >
                About Company
              </a>
              <p className='text-base font-normal leading-6 text-gray-300 lg:w-64 dark:text-gray-400'>
                Time becomes wealth with us.
              </p>
              <div className='flex justify-start mt-4 '>
                <a
                  href='http://www.youtube.com/@ConquerorDeveloper'
                  type='button'
                  className='m-1 leading-normal text-gray-300 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full dark:border-gray-400 dark:hover:bg-gray-800 hover:bg-slate-700 w-9 h-9'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='w-4 h-full mx-auto text-gray-300 dark:text-gray-400 bi bi-youtube'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z'
                    />
                  </svg>
                </a>
                <a
                  href='https://twitter.com/its_1four'
                  type='button'
                  class='m-1 leading-normal text-gray-300 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-slate-700 w-9 h-9'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='w-4 h-full mx-auto text-gray-300 dark:text-gray-400 bi bi-twitter'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'></path>
                  </svg>
                </a>
                <a
                  href='https://github.com/ConquerorCletus'
                  type='button'
                  class='m-1 leading-normal text-gray-300 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 text-text-gray-50 hover:bg-slate-700 w-9 h-9'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='w-4 h-full mx-auto text-gray-100 dark:text-gray-400 bi bi-github'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8' />{' '}
                  </svg>
                </a>
                <a
                  href='http://www.linkedin.com/in/chibuike-nwafor-722b88262'
                  type='button'
                  className='m-1 leading-normal text-gray-400 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-slate-700 w-9 h-9'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='w-4 h-full mx-auto text-gray-300 dark:text-gray-400 bi bi-linkedin'
                    viewBox='0 0 16 16'
                  >
                    <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'></path>
                  </svg>
                </a>
                {/* Add other social media links here */}
              </div>
            </div>
            <div className='w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0'>
              <h2 className='mb-4 text-lg font-bold text-gray-200 dark:text-gray-400'>
                Contact Info
              </h2>
              <p className='flex items-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='w-4 h-4 mr-1 text-gray-300 dark:text-gray-400 bi bi-geo-alt '
                  viewBox='0 0 16 16'
                >
                  <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z'></path>
                  <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'></path>
                </svg>
                <span className='text-gray-300 dark:text-gray-400'>
                  Lagos, Nigeria
                </span>
              </p>
              <p className='flex items-center mb-4 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='w-4 h-4 mr-2 text-gray-300 dark:text-gray-400 bi bi-envelope'
                  viewBox='0 0 16 16'
                >
                  <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'></path>
                </svg>
                <span className='text-gray-300 dark:text-gray-400'>
                  conquerordevs@gmail.com
                </span>
              </p>
              <p className='flex items-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='w-4 h-4 mr-2 text-gray-300 dark:text-gray-400 bi bi-telephone'
                  viewBox='0 0 16 16'
                >
                  <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'></path>
                </svg>
                <span className='text-gray-300 dark:text-gray-400'>
                  +234-8154381420
                </span>
              </p>
              {/* Add other content for the second column */}
            </div>
            <div className='w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0'>
              {/* Add content for the third column */}
              <h2 className='mb-4 text-xl font-bold text-gray-200 dark:text-gray-400'>
                Quick Links
              </h2>
              <ul>
                <li className='flex items-center mb-4 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                    ></path>
                  </svg>
                  <a
                    href='#Home'
                    className='inline-block text-base font-normal text-gray-300 dark:text-gray-400 hover:underline'
                  >
                    Home
                  </a>
                </li>
                <li className='flex items-center mb-4 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                    ></path>
                  </svg>
                  <a
                    href='#About'
                    className='inline-block text-base font-normal text-gray-300 dark:text-gray-400 hover:underline'
                  >
                    About Us
                  </a>
                </li>
                <li class='flex items-center mb-4 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                    ></path>
                  </svg>
                  <a
                    href='#Services'
                    className='inline-block text-base font-normal text-gray-300 dark:text-gray-400 hover:underline'
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className='w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0'> */}
            {/* Add content for the fourth column */}
            {/* </div> */}
            {/* <div className='w-full px-4 mb-2 lg:mb-0 md:w-1/3 lg:w-4/12'> */}
            {/* Add content for the fifth column */}
            {/* </div> */}
          </div>
          <div className='py-5 text-center text-gray-200 bg-blue-700 dark:bg-gray-800 dark:text-gray-400'>
            <span>Conquerordev © Copyright 2024 . All Rights Reserved</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
