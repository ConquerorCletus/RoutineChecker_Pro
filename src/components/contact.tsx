import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiHeart,
  FiYoutube,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi';

const Contact = () => {
  const Form = useRef();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // ... (existing code for sending email)
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
                    <div className='inline-flex bg-blue-500 items-center justify-center w-12 h-12 mb-6 text-gray-100 rounded-full dark:bg-teal-700'>
                      <FiMail size={20} />
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Email
                    </h2>
                    <a
                      href='mailto:conquerordevs@gmail.com'
                      className='text-base font-medium text-gray-500 md:text-lg dark:text-gray-400'
                    >
                      conquerordevs@gmail.com
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className='w-full px-4 mb-10 sm:w-1/2'>
                  <div className='max-w-xs mx-auto'>
                    <div className='inline-flex bg-blue-500 items-center justify-center w-12 h-12 mb-6 text-gray-100 rounded-full'>
                      <FiPhone size={20} />
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Phone
                    </h2>
                    <a
                      href='tel:+2348154381420'
                      className='text-base font-medium text-gray-500 md:text-lg dark:text-gray-400'
                    >
                      +234 8154381420
                    </a>
                  </div>
                </div>
                {/* Office */}
                <div className='w-full px-4 mb-10 sm:w-1/2'>
                  <div className='max-w-xs mx-auto'>
                    <div className='inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 rounded-full bg-blue-500'>
                      <FiMapPin size={20} />
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Office
                    </h2>
                    <p className='text-base font-medium text-gray-500 md:text-lg dark:text-gray-400'>
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                {/* Social */}
                <div className='w-full px-4 sm:w-1/2'>
                  <div className='max-w-xs mx-auto'>
                    <div className='inline-flex items-center bg-blue-500 justify-center w-12 h-12 mb-6 text-gray-10 rounded-full'>
                      <FiHeart size={20} />
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400'>
                      Social
                    </h2>
                    <a
                      href='http://www.youtube.com/@ConquerorDeveloper'
                      className='inline-block mr-8 text-blue-600 dark:text-blue-400 dark:hover:text-slate-700 hover:scale-125'
                    >
                      <FiYoutube size={20} />
                    </a>
                    <a
                      href='https://twitter.com/its_1four'
                      className='inline-block mr-8 text-blue-600 hover:scale-125'
                    >
                      <FiTwitter size={20} />
                    </a>
                    <a
                      href='http://www.linkedin.com/in/chibuike-nwafor-722b88262'
                      className='inline-block mr-8 text-blue-600 hover:scale-125'
                    >
                      <FiLinkedin size={20} />
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
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800'
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
                    rows='4'
                    placeholder='Your Message'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded resize-none dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800'
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div className='mb-6'>
                  <button
                    type='submit'
                    className='w-full px-6 py-3 font-bold text-white uppercase bg-blue-500 rounded-full focus:outline-none hover:bg-blue-700 focus:bg-blue-700 dark:bg-teal-700 dark:hover:bg-teal-900 dark:focus:bg-teal-900'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
