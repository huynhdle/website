import React from 'react';
import DH from './images/DH.png';

const Navbar = () => {
  return (
    <div className='bg-deepslate-900 text-white p-8 px-12 text-base font-akira rounded-b-3xl'>
      <div className='flex items-center justify-between'>
        <div className='flex-1 text-left space-x-12 flex'>
          <h1 className='text-white'>HOME</h1>
          <h1 className='text-deepslate-600 hover:text-white duration-200'>ABOUT ME</h1>
          <h1 className='text-deepslate-600 hover:text-white duration-200'>PROJECTS</h1>
          <h1 className='text-deepslate-600 hover:text-white duration-200'>EXPERIENCE</h1>
        </div>
        <div className='flex-none text-center'>
            <img src={DH} alt='Logo'/>
        </div>
        <div className='flex-1 text-right'>
          <h1 className='inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-zinc-800 hover:bg-white mt-4 lg:mt-0 duration-200'>CONTACT ME</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;