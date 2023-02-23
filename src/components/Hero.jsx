import React from 'react'
import DHPortrait from './images/DHPortrait.png';

const Hero = () => {
  return (
    <div className='w-8/12 pt-12 mx-auto'>
      <div className='bg-deepslate-700 text-white px-24 rounded-3xl grid-cols-2 flex space-x-16'>
        <div className='flex flex-col justify-center w-11/12'>
          <div className='text-2xl space-x-12 font-poppins'>
            <h1 className='text-white'>HI, MY NAME IS</h1>
          </div>
          <div className='font-akira space-x-12 text-6xl pt-4'>
            <h1 className='text-white'>DANIEL</h1>
          </div>
          <div className='font-akira space-x-12 text-6xl'>
            <h1 className='text-white'>HUYNH</h1>
          </div>
          <div className='font-poppins space-x-12 text-left pt-8'>
            <p className='text-deepslate-400'>I AM CURRENTLY A COMPUTER SCIENCE STUDENT BASED IN SYDNEY WHO IS ASPIRING TO BE A UNICORN DEVELOPER! IN SAYING THIS, I AM LOOKING TO PURSUE A CAREER IN PRODUCT DESIGN AND FRONT-END DEVELOPMENT.</p>
          </div>
        </div>
        <div className='pt-8 w-full items-end'>
            <img src={DHPortrait} alt='Logo'/>
        </div>
      </div>
    </div>
  )
}

export default Hero