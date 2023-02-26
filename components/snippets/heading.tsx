import React from 'react';

interface HeadingTitles {
  sideText: string,
  mainText: string
}

const Heading = (props: HeadingTitles) => {
  return (
    <div className='w-full mx-auto max-w-[1240px] 4xl:max-w-[1600px]'>
            <h3 className='font-diablo text-gray-700 text-center'>+ { props.sideText } +</h3>
            <h2 className='font-diablo text-center py-8 mt-[-4px] border-t-2 border-gray-800'>{ props.mainText }</h2>
    </div>
  )
}

export default Heading;