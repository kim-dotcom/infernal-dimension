import React from 'react';
import Heading from './snippets/heading';

const BlogMain = () => {
  return (
    <div className='w-full px-4 lg:px-12 pt-20 4xl:pt-32 pb-12 bg-gray-900'>
       <Heading sideText={'Blog'} mainText={'Thoughts on environment art etc.'} />

        <div className='m-auto max-w-[1240px] 4xl:max-w-[1600px] grid-cols-4 gap-8'>
            ...            
        </div>
    </div>
  );
}

export default BlogMain;