import React, { useState, useEffect } from 'react';
// import { auth } from '@/helpers/firebase';
import Image from 'next/image';
import { auth, db } from '@/helpers/firebase';

const banner = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileRef = db.collection('profiles').doc(auth.currentUser?.uid);
        const profileSnapshot = await profileRef.get();

        if (profileSnapshot.exists()) {
          const data = profileSnapshot.data();
          setProfileData(data);
        } else {
          // Handle the case where the profile data doesn't exist
        }
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
    <>
      <div className='Banner p-10 justify-between'>
        <div className='ml-20 rounded-full w-40 h-40 border-double border-4 border-slate-50'>
          {profileData && (
            <Image
              src={profileData.imageURL || '/picon.png'} // Provide the correct path to the image
              alt='Profile Icon'
              layout='responsive'
              width={160}
              height={160}
              objectFit='cover'
              className='rounded-full'
            />
          )}
        </div>
        <div className='justify-center align-middle h-fit my-auto'>
          <h1 className='font-sans text-5xl text-white text-center my-auto'>
            Welcome Back,{' '}
            {auth.currentUser ? auth.currentUser.displayName : 'user '}
          </h1>
          {profileData && (
            <p className='font-serif text-xl text-white text-center mt-20'>
              {profileData.affirmation || 'I must always be on time'}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default banner;
