import React from 'react'
import DHPortrait from '../images/DHPortrait.png';

const Hello = () => {
    return (
        <div className={'flex justify-center pt-16 text-white'}>
            <div className='relative rounded-[20px] w-7/12 px-32 py-16 grid grid-cols-2 items-center font-akira bg-deepslate-700'>
                <div className='flex flex-col justify-left space-y-4'>
                    <h1 className='text-2xl'> HI, MY NAME IS</h1>
                    <h1 className='text-7xl'> DANIEL HUYNH</h1>
                    <h1 className='font-poppins text-deepslate-400 text-lg pt-4'> I AM CURRENTLY A COMPUTER SCIENCE STUDENT BASED IN SYDNEY WHO IS ASPIRING TO BE A UNICORN DEVELOPER! IN SAYING THIS, I AM LOOKING TO PURSUE A CAREER IN PRODUCT DESIGN AND FRONT-END DEVELOPMENT.</h1>
                </div>
				<div className='flex items-end absolute bottom-0 right-24 w-[525px] justify-end overflow-visible'>
					<img src={DHPortrait} alt='Daniel Huynh MeMoji Portrait'/>
				</div> 
            </div>
        </div>






    );
};

export default Hello