import Link from 'next/link';
import React from 'react';
import Heading from './snippets/heading';

const Services = () => {
  return (
    <div id='services' className='w-full md:min-h-[50vh] 3xl:min-h-[0] px-4 lg:px-12 py-12 bg-[#220d0d]'>
        <Heading sideText={'Services'} mainText={'Project based offer'} />

        <div className='m-auto max-w-[1240px] 4xl:max-w-[1600px] lg:grid grid-cols-3 gap-4'>
            <div className='col-span-1'>
            <div className='bg-[#2b1111] rounded-lg text-center w-full h-full py-5'>
                <h3 className='font-diablo text-center pt-2 pb-5'>Small Project</h3>
                <p className='pb-2'>Room-sized / outdoor vista</p>
                <p className='pb-2'>~3 environment assets</p>
                <p className='pb-2'>~3 days completion</p>
                <h3 className='font-diablo text-center py-4'>From 250$</h3>
                <Link href='/contact'>
                  <button className='w-[80%] mb-4'>I want this</button>
                </Link>
              </div>
            </div>

            <div className='col-span-1 mt-4 lg:mt-0'>
            <div className='bg-[#3a1717] rounded-lg text-center w-full h-full py-5'>
                <h3 className='font-diablo text-center pt-2 pb-5'>Standard Project</h3>
                <p className='pb-2'>House-sized / outdoor area</p>
                <p className='pb-2'>~6 environment assets</p>
                <p className='pb-2'>~7 days completion</p>
                <h3 className='font-diablo text-center py-4'>From 500$</h3>
                <Link href='/contact'>
                  <button className='w-[80%] mb-4'>I want this</button>
                </Link>
              </div>
            </div>

            <div className='col-span-1 mt-4 lg:mt-0'>
            <div className='bg-[#2b1111] rounded-lg text-center w-full h-full py-5'>
                <h3 className='font-diablo text-center pt-2 pb-5'>Large Project</h3>
                <p className='pb-2'>Vast environments</p>
                <p className='pb-2'>~10 environment assets</p>
                <p className='pb-2'>~14 days completion</p>
                <h3 className='font-diablo text-center py-4'>From 1000$</h3>
                <Link href='/contact'>
                  <button className='w-[80%] mb-4'>I want this</button>
                </Link>
              </div>
            </div>            
        </div>
    </div>
  );
}

export default Services;