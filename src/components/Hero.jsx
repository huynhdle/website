import React from 'react'
import DHPortrait from './images/DHPortrait.png';

const Hero = () => {
  return (
    <div className='w-6/12 pt-12 mx-auto'>
      <div className='bg-zinc-700 text-white px-24 rounded-3xl flex items-center'>
        <div>
          <div className='text-2xl space-x-12 font-poppins'>
          <h1 className='text-white'>HI, MY NAME IS</h1>
          </div>
          <div className='font-akira space-x-12 text-6xl pt-4'>
          <h1 className='text-white'>DANIEL</h1>
          </div>
          <div className='font-akira space-x-12 text-6xl'>
          <h1 className='text-white'>HUYNH</h1>
          </div>
          <div className='font-poppins space-x-12 pt-4'>
          <h1 className='text-zinc-300'>I AM CURRENTLY A COMPUTER SCIENCE STUDENT BASED</h1>
          <h1 className='text-zinc-300'>IN SYDNEY WHO IS ASPIRING TO BE A UNICORN DEVELOPER!</h1>
          <h1 className='text-zinc-300'>IN SAYING THIS, I AM LOOKING TO PURSUE A CAREER IN</h1>
          <h1 className='text-zinc-300'>PRODUCT DESIGN AND FRONT-END DEVELOPMENT.</h1>
          </div>
        </div>
        <div className='pt-8 w-1/2'>
            <img src={DHPortrait} alt='Logo'/>
        </div>
      </div>
    </div>
  )
}

export default Hero