import React from 'react';
import DESTINATEHome from '../images/DESTINATEHome.png';

const DESTINATE = () => {
  return (
    <div className={'flex justify-center pt-16 text-base font-akira text-white'}>
      <div className='transition ease-in-out hover:scale-[1.02] hover:bg-deepslate-700 duration-200 relative rounded-[20px] w-6/12 px-32 py-16 grid grid-cols-2 items-center font-akira bg-deepslate-800'>
        <div className='flex flex-col justify-left space-y-4'>
            <h1 className='text-5xl'>DESTINATE</h1>
            <h1 className='text-2xl text-deepslate-500'>CASE STUDY</h1>
            <h1 className='font-poppins text-deepslate-400 text-lg pt-4'> WITH TRUSTED RECOMMENDATIONS BEING A VITAL COMPONENT OF CUSTOMER DECISION MAKING, OUR APP, ‘DESTINATE’, BETTER SUPPORTS RESTAURANTS AND IMPROVES THE CUSTOMER DECISION-MAKING EXPERIENCE WITH RECOMMENDATIONS.</h1>
        </div>
        <div className='flex absolute bottom-0 right-32 w-[375px] overflow-visible'>
          <img src={DESTINATEHome} alt='Destinate App Home Screen'/>
        </div> 
      </div>
    </div>
  );
};

export default DESTINATE