import React from 'react';

const Main = () => {
  return (
    <div className="bg-cover bg-center " style={{backgroundImage: `url('../ue4.jpg')`}}>
        <div className='max-w-[1240px] 4xl:max-w-[1600px] pt-14 w-full h-[100vh] mx-auto text-center text- flex flex-col justify-center'>   
            <p className='text-red-800 text-md'>
                They are rage, brutal, without mercy.<br/>
                But you. You will be worse.<br/>
                Rip and tear, until it is done.
            </p>

            <h1 className='pt-[50vh] pb-6 font-diablo text-center'>
                <span className='text-red-200'>{process.env.title}</span>
            </h1>
            <h3 className='text-red-400 font-bold p-2 uppercase font-diablo text-center'>
                {process.env.subtitle1}<br/>{process.env.subtitle2}
            </h3>
        </div>
    </div>
  );
}

export default Main;