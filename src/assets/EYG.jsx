import React from 'react';
import EYGLOGO from '../images/EYGLOGO.png';

const EYG = () => {
  return (
    <div className={'flex justify-center pt-16 text-base font-akira text-white'}>
      <div className='transition ease-in-out hover:scale-[1.02] hover:bg-deepslate-700 duration-200 rounded-[20px] w-6/12 px-32 py-16 grid grid-cols-2 items-center font-akira bg-deepslate-800'>
        <div className='flex flex-col justify-left space-y-4'>
            <h1 className='text-5xl'>EMPTY YOUR GLASS</h1>
            <h1 className='text-2xl text-deepslate-500'>PODCAST</h1>
            <h1 className='font-poppins text-deepslate-400 text-lg pt-4'> IN MID 2022, MY FRIEND AND I DECIDED TO LAUNCH OUR VERY OWN PODCAST FOR THE MORDERN AUSTRALIAN-ASIAN. WE FOUND THAT IN AUSTRALIA, THERE IS LITTLE REPRESENTATION FOR ASIANS IN THE MEDIA AND WE WANTED TO PROVIDE A PLATFORM TO TALK ABOUT ANYTHING.</h1>
        </div>
        <div className='flex w-[525px] justify-end overflow-visible'>
          <img src={EYGLOGO} alt='Daniel Huynh MeMoji Portrait'/>
        </div> 
      </div>
    </div>
  );
};

export default EYG