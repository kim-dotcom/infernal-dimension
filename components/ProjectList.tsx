import React from 'react';
import Heading from './snippets/heading';

const ProjectList = () => {
  return (
    <div className='w-full px-4 lg:px-12 pt-20 4xl:pt-32 pb-12 bg-gray-900'>
        <Heading sideText={'Projects'} mainText={'Showcase of previous work'} />

        <div className='max-w-[1240px] 4xl:max-w-[1600px] mx-auto'>
            No implemented
        </div>
    </div>
  );
}

export default ProjectList;