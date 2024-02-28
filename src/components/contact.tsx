import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const contact = () => {
  const customColor = '#5b818a';
  const Form = useRef();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
    <>
      <section className='flex items-center bg-stone-100 lg:h-screen font-poppins dark:bg-gray-800'>
        <div className='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6'>
          <div className='mb-10 text-left'>
            <h2 className='pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300'>
              Let's Stay Connected
            </h2>
            <p className='text-sm font-bold dark:text-gray-400'>
              Feel free to reach out to us either by using the provided form in
              this section or by contacting us directly using the information
              below.
            </p>
          </div>
          <div className='flex flex-wrap '>
            {/* Left Section */}
            <div className='w-full px-4 lg:w-1/2 mb-11 lg:mb-0'>
              <div className='flex flex-wrap'>
                {/* Email */}
                <div className='w-full px-4 mb-10 sm:w-1/2'>
                  <div className='max-w-xs mx-auto'>
                    <div
                      // style={{ backgroundColor: customColor }}
                      className='inline-flex bg-blue-500 items-center justify-center w-12 h-12 mb-6 text-gray-100 rounded-full dark:bg-teal-700'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-envelope'
                        viewBox='0 0 16 16'
                      >
                        <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'></path>
                      </svg>
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Email
                    </h2>
                    <a
                      href='#'
                      className='text-base font-medium text-gray-500 md:text-lg dark:text-gray-400'
                    >
                      conquerordevs@gmail.com
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className='w-full px-4 mb-10 sm:w-1/2'>
                  <div className='max-w-xs mx-auto'>
                    <div
                      // style={{ backgroundColor: customColor }}
                      className='inline-flex bg-blue-500 items-center justify-center w-12 h-12 mb-6 text-gray-100 rounded-full'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-telephone'
                        viewBox='0 0 16 16'
                      >
                        <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'></path>
                      </svg>
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Phone
                    </h2>
                    <a
                      href='#'
                      className='text-base font-medium text-gray-500 md:text-lg dark:text-gray-400'
                    >
                      +234 8154381420
                    </a>
                  </div>
                </div>
                {/* Office */}
                <div className='w-full px-4 mb-10 sm:w-1/2'>
                  <div className='max-w-xs mx-auto'>
                    <div
                      // style={{ backgroundColor: customColor }}
                      className='inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 rounded-full bg-blue-500'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-geo-alt'
                        viewBox='0 0 16 16'
                      >
                        <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z'></path>
                        <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'></path>
                      </svg>
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Office
                    </h2>
                    <a
                      href='#'
                      className='text-base font-medium text-gray-500 md:text-lg dark:text-gray-400'
                    >
                      Lagos, Nigeria
                    </a>
                  </div>
                </div>
                {/* Social */}
                <div className='w-full px-4 sm:w-1/2'>
                  <div className='max-w-xs mx-auto'>
                    <div
                      // style={{ backgroundColor: customColor }}
                      className='inline-flex items-center bg-blue-500 justify-center w-12 h-12 mb-6 text-gray-10 rounded-full'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='white'
                        className='bi bi-bookmark-heart'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z'
                        />
                        <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z' />
                      </svg>
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Social
                    </h2>
                    <a
                      href='http://www.youtube.com/@ConquerorDeveloper'
                      className='inline-block mr-8 text-blue-600 dark:text-blue-400 dark:hover:text-slate-700 hover:scale-125'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='w-6 h-6 bi bi-youtube'
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
                      className='inline-block mr-8 text-blue-600 hover:scale-125'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='w-6 h-6 bi bi-twitter'
                        viewBox='0 0 16 16'
                      >
                        <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'></path>
                      </svg>
                    </a>
                    <a
                      href='http://www.linkedin.com/in/chibuike-nwafor-722b88262'
                      className='inline-block mr-8 text-blue-600 hover:scale-125'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='w-6 h-6 bi bi-linkedin'
                        viewBox='0 0 16 16'
                      >
                        <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section - Contact Form */}
            <div className='w-full px-4 lg:w-1/2'>
              <form
                // ref={Form}
                // onSubmit={sendEmail}
                className='p-6 bg-gray-50 dark:bg-gray-900'
              >
                {/* Email Input */}
                <div className='mb-6'>
                  <label
                    htmlFor='email'
                    className='block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400'
                  >
                    Email
                  </label>
                  <input
                    type='text'
                    placeholder='abc@gmail.com'
                    required=''
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800'
                  />
                </div>
                {/* Subject Input */}
                <div className='mb-6'>
                  <label
                    htmlFor='subject'
                    className='block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    placeholder="I'm asking information for..."
                    required=''
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800'
                  />
                </div>
                {/* Message Textarea */}
                <div className='mb-6'>
                  <label
                    htmlFor='message'
                    className='block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400'
                  >
                    Message
                  </label>
                  <textarea
                    type='message'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='How can we help you?'
                    required=''
                    className='block w-full px-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800'
                  ></textarea>
                </div>
                {/* Send Button */}
                <button
                  type='submit'
                  // style={{ backgroundColor: customColor }}
                  className='bg-blue-500 px-4 py-2 font-medium text-gray-100  rounded hover:bg-slate-700'
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
