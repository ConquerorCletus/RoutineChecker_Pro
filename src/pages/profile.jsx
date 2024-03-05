import React, { useState } from 'react';
import Navbar from '../components/dNavbar';
import { FaRegUser } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../helpers/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../helpers/firebase';
import { toast } from 'react-toastify';
// import PrivateRoute from '../components/PrivateRoute';
import Spinner from '../components/Spinner';
import Router from 'next/router';

const profile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('');
  const [sentence, setSentence] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const router = Router;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      if (!selectedImage) {
        // Handle case where no image is selected
        throw new Error('No image selected');
      }
      const storageRef = ref(storage, `Profile-image/${selectedImage.name}`);
      console.log(storageRef);
      const uploadPicture = uploadBytesResumable(storageRef, selectedImage);
      console.log(uploadPicture);

      // Get the download URL once the image is uploaded
      const downloadURL =
        uploadPicture.state === 'success'
          ? await getDownloadURL(storageRef)
          : null;
      console.log('Download URL:', downloadURL);

      // Add the user profile data to Firestore including the image URL
      const profileData = {
        name: name, // Replace with the actual name
        affirmation: sentence, // Replace with the actual affirmation
        imageURL: downloadURL || '', // Replace with the actual downloadURL
        userId: auth.currentUser?.uid,
        timestamp: serverTimestamp(), // Add the timestamp field
      };

      addDoc(collection(db, 'profiles'), profileData);

      // Handle success
      toast.success('Profile saved successfully!');
      router.push('/dashboard');
    } catch (error) {
      // Handle error
      toast.error('Error saving profile:', error);
      // alert('Error saving profile. Please try again.');
    } finally {
      setIsSaving(false); // Reset loading state whether it succeeds or fails
    }
  };

  return (
    <>
      {/* <PrivateRoute> */}
      <Navbar />

      <section className='Banner h-[90vh] items-center justify-between'>
        <div className='relative mx-auto'>
          <input
            type='file' // Use type 'file' for image uploads
            accept='image/*' // Set the accepted file types to images
            className='h-80 w-80 bg-slate-50 rounded-full object-cover hidden'
            id='profile-image-input'
            onChange={handleImageChange}
          />
          <label
            htmlFor='profile-image-input'
            className='cursor-pointer h-80 w-80 bg-slate-50 rounded-full object-cover relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              // src={
              //   selectedImage
              //     ? URL.createObjectURL(selectedImage)
              //     : '/picon.png'
              // }
              // src={selectedImage ? selectedImage : '/picon.png'}
              src='/picon.png'
              alt=''
              className={`h-80 w-80 bg-slate-50 rounded-full object-cover transition-opacity ${
                isHovered ? 'opacity-50' : 'opacity-100'
              }`}
            />
            {isHovered && (
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl rounded-full'>
                Select Profile Picture
              </div>
            )}
          </label>
        </div>

        <form
          action=''
          className='flex flex-col ml-4 w-1/2 h-[90vh] border-5 border-black bg-slate-50 rounded-lg border-double'
        >
          <div className='my-auto'>
            <h1 className='text-3xl font-bold font-serif text-center mx-auto mt-10 text-slate-700'>
              Profile
            </h1>
            <div className='flex flex-col space-y-20'>
              <div className='mx-auto mt-10 w-fit h-fit'>
                <FaRegUser className='inline text-2xl mr-6' />
                <input
                  type='text'
                  name=''
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Your Name'
                  className='inline w-[35vw] h-10 border border-gray-300 rounded-md text-center'
                />
              </div>
              <div className='mx-auto w-fit h-fit'>
                <GiSelfLove className='my-auto inline text-2xl mr-6' />
                <input
                  type='text'
                  name=''
                  id='sentence'
                  value={sentence}
                  onChange={(e) => setSentence(e.target.value)}
                  placeholder='Your sentence of affirmation, e.g I must always be on time'
                  className='w-[35vw] h-20 border border-gray-300 rounded-md inline text-center'
                />
              </div>
            </div>
          </div>
          <button
            className='text-center mx-auto bg-blue-600 h-[50px] w-[40vw] text-slate-50 rounded-md border-2 border-slate-700 hover:bg-blue-500 cursor-pointer mb-20'
            type='button'
            // value='Save'
            onClick={handleSave}
            // value={isSaving ? <Spinner /> : 'Save'}
            disabled={isSaving}
          >
            {isSaving ? <Spinner /> : 'Save'}
          </button>
        </form>
      </section>
      {/* </PrivateRoute> */}
    </>
  );
};

export default profile;
