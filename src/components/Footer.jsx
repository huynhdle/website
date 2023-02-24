import React from 'react'
import DH from '../images/DH.png';
import EMAIL from '../images/EMAIL.png';
import LINKEDIN from '../images/LINKEDIN.png';
import DHLaptop from '../images/DHLaptop.png';

const Footer = () => {
  return (
	<div className='pt-24'>
		<div className={'flex justify-center text-base font-akira rounded-t-[40px] bg-deepslate-900 text-white'}>
			<div className='relative w-9/12 grid grid-cols-3 items-center h-[200px]'>
				<div className='flex justify-left items-center'>
					<img src={DH} alt='DH Logo'/>
				</div>
				<div className='flex flex-col justify-center space-y-4'>
					<h1 className='text-white text-center'>LET'S CONNECT!</h1>
					<div className='flex justify-center items-center space-x-4'>
						<div className='w-8'>
							<img src={EMAIL} alt='Email Logo'/>
						</div>
						<div className='w-8'>
							<img src={LINKEDIN} alt='LinkedIn Logo'/>
						</div>
					</div>
				</div>
				<div className='flex items-end absolute bottom-0 right-0 justify-end overflow-visible'>
					<img src={DHLaptop} alt='Daniel Huynh MeMoji on Laptop'/>
				</div> 
			</div>
		</div>		
	</div>
  );
};

export default Footer