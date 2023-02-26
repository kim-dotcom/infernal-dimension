import React from 'react';
import Heading from './snippets/heading';

interface BlogEntry {
    entryId: string,
}

const BlogId = (props: BlogEntry) => {
  return (
    <div className='w-full px-4 lg:px-12 pt-20 4xl:pt-32 pb-12 bg-gray-900'>
    <Heading sideText={'Blog'} mainText={props.entryId} />

        <div className='m-auto max-w-[1240px] 4xl:max-w-[1600px] grid-cols-4 gap-8'>
            ...            
        </div>
    </div>
  );
}

export default BlogId;