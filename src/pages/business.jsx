import React, { useState } from 'react';
import { TiBusinessCard } from 'react-icons/ti';
import Navbar from '@/components/dNavbar';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../helpers/firebase';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const business = () => {
  const [numEmployees, setNumEmployees] = useState(1);
  const [employeeEmails, setEmployeeEmails] = useState(
    Array(numEmployees).fill('')
  );
  const router = useRouter();

  const handleNumEmployeesChange = (e) => {
    const newNumEmployees = parseInt(e.target.value, 10) || 1;
    setNumEmployees(newNumEmployees);

    // Adjust the array of emails based on the new number of employees
    setEmployeeEmails((prevEmails) => {
      const newEmails = [...prevEmails];
      while (newEmails.length < newNumEmployees) {
        newEmails.push('');
      }
      return newEmails.slice(0, newNumEmployees);
    });
  };

  const handleEmailChange = (index, email) => {
    setEmployeeEmails((prevEmails) => {
      const newEmails = [...prevEmails];
      newEmails[index] = email;
      return newEmails;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeesCollection = collection(db, 'employees');
    try {
      await Promise.all(
        employeeEmails.map(async (email) => {
          if (email.trim() !== '') {
            // Add employee to the Firestore collection
            await addDoc(employeesCollection, {
              email,
              // Additional fields if needed
            });
          }
        })
      );
      toast.success('Employees Emails saved!!');
    } catch (error) {
      toast.error('Error saving emails:', error);
      // Handle error, show error message, etc
    }
    // Redirect to the businessTask page
    router.push('/businessTask');
  };

  return (
    <>
      <Navbar />
      <section className='Banner h-[100vh] w-full justify-center px-auto py-auto'>
        <div className='flex w-[70vw] h-[90vh] justify-center flex-col my-auto'>
          <form
            className='flex flex-col h-fit w-[60vw] mx-auto justify-center border-slate-700 border-[5px] border-double my-auto bg-stone-200 rounded-lg'
            onSubmit={handleSubmit}
          >
            <h4 className='mt-2 text-2xl font-semibold font-serif mx-auto flex items-center text-slate-800'>
              <TiBusinessCard /> Business Owner form
            </h4>

            <label className='mx-auto mt-5 text-center text-lg font-medium font-serif'>
              Number of Employees:
              <input
                className='ml-10 text-center rounded-md bg-slate-50 border-2 border-slate-700 mb-5'
                type='number'
                min='1'
                max='5'
                value={numEmployees}
                onChange={handleNumEmployeesChange}
              />
            </label>

            {/* Render email input fields based on the number of employees */}
            {Array.from({ length: numEmployees }, (_, index) => (
              <label
                className='mx-auto text-lg text-center font-medium font-serif'
                key={index}
              >
                Email for Employee {index + 1}:
                <input
                  className='inline ml-8 w-[240px] h-[30px] text-center  rounded-md border-2 bg-slate-50 border-slate-700 mt-5'
                  type='email'
                  value={employeeEmails[index]}
                  onChange={(e) => handleEmailChange(index, e.target.value)}
                />
              </label>
            ))}

            <button
              className='mx-auto mt-[60px] bg-blue-600 text-slate-100 border-solid border-[1px] rounded-none w-[450px] h-[60px] mb-20'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      {/* <Banner /> */}
    </>
  );
};

export default business;
