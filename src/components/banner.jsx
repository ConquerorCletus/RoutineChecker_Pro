import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { auth, db } from '@/helpers/firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
} from 'firebase/firestore';

const Banner = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileQuery = query(
          collection(db, 'profiles'),
          where('userId', '==', auth.currentUser?.uid),
          orderBy('timestamp', 'desc'), // Assuming you have a 'timestamp' field
          limit(1)
        );

        const unsubscribe = onSnapshot(profileQuery, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            setProfileData(data);
          });
        });

        return () => unsubscribe();
      } catch (error) {
        // Handle error while fetching profile data
        console.error('Error fetching profile data:', error);
      }
    };

    if (auth.currentUser) {
      fetchProfileData();
    }
  }, [auth.currentUser]);

  return (
    <div className='Banner p-10 justify-between'>
      <div className='ml-20 rounded-full w-40 h-40 border-double border-4 border-slate-50'>
        <Image
          src={auth.currentUser?.displayImageUrl || '/picon.png'}
          alt='Profile Icon'
          layout='responsive'
          width={160}
          height={160}
          objectFit='cover'
          className='rounded-full'
        />
      </div>
      <div className='justify-center align-middle h-fit my-auto'>
        <h1 className='font-sans text-5xl text-white text-center my-auto'>
          Welcome Back,{' '}
          {profileData?.name ? auth.currentUser.displayName : 'User'}
        </h1>
        <p className='font-serif text-xl text-white text-center mt-20'>
          {profileData?.affirmation || 'I must always be on time'}
        </p>
      </div>
    </div>
  );
};

export default Banner;
