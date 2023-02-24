import React from 'react';
import DH from '../assets/images/DH.png';

const Navbar = () => {
  return (
    <div className={'flex justify-center text-base font-akira bg-deepslate-900 text-white rounded-b-[20px]'}>
      <div className='w-9/12 py-8 grid grid-cols-3 items-center'>
        <div className='flex flex-row justify-left space-x-12'>
            <h1 className='text-white text-center'>HOME</h1>
            <h1 className='text-deepslate-600 text-center hover:text-white duration-200'>ABOUT ME</h1>
            <h1 className='text-deepslate-600 text-center hover:text-white duration-200'>PROJECTS</h1>
            <h1 className='text-deepslate-600 text-center hover:text-white duration-200'>EXPERIENCE</h1>
        </div>
        <div className='flex justify-center'>
          <img src={DH} alt='DH Logo'/>
        </div>
        <div className='flex justify-end'>
          <h1 className='inline-block px-4 py-2 border rounded-full text-white border-white hover:border-transparent hover:text-zinc-800 hover:bg-white duration-200'>CONTACT ME</h1>
        </div>
      </div>
    </div>
  );
};
   
export default Navbar;