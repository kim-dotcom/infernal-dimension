import React from 'react'
import Heading from './snippets/heading';

const Skills = () => {
  return (
    <div className='w-full md:min-h-[5vh] px-4 lg:px-12 py-12 bg-gray-900'>
        <Heading sideText={'Skills'} mainText={'Our 3D content creation tech stack'} />

        <div className='m-auto max-w-[1240px] 4xl:max-w-[1600px] grid-cols-2 gap-8'>
            <div className='col-span-1 pb-4'>
                <p className='text-justify'>Knowing how to execute is necessary, knowing how to execute well is... better. We are well-versed in industry-standard 3D software packages and worflows. From real-time 3D engines, modeling & texturing software, to specialized aplications, we understand the production pipeline.</p>                
                
                <div className='py-4'>
                    <div className='flex flex-row justify-center'>
                        <div className='col-span-1'>
                            <img className='w-14 h-14' alt='Unreal Engine' src='/icons/icon-unreal.png' />
                        </div>
                        <div className='col-span-1'>
                            <img className='w-14 h-14' alt='Unity' src='/icons/icon-unity.png' />
                        </div>
                        <div className='col-span-1'>
                            <img className='w-14 h-14' alt='Blender' src='/icons/icon-blender.png' />
                        </div>
                        <div className='col-span-1'>
                            <img className='w-14 h-14' alt='ZBrush' src='/icons/icon-zbrush.png' />
                        </div>
                        <div className='col-span-1'>
                            <img className='w-14 h-14' alt='Substance' src='/icons/icon-substance.png' />
                        </div>
                        <div className='col-span-1'>
                            <img className='w-14 h-14' alt='Photoshop' src='/icons/icon-photoshop.png' />
                        </div>
                        <div className='col-span-1'>
                            <img className='w-14 h-14' alt='SpeedTree' src='/icons/icon-speedtree.png' />
                        </div>
                        <div className='col-span-1'>
                            <img className='w-14 h-14' alt='Reality Capture' src='/icons/icon-realitycapture.png' />
                        </div>
                        <div className='col-span-1 hidden sm:flex'>
                            <img className='w-14 h-14' alt='World Creator' src='/icons/icon-worldcreator.png' />
                        </div>
                        <div className='col-span-1 hidden sm:flex'>
                            <img className='w-14 h-14' alt='Revit' src='/icons/icon-revit.png' />
                        </div>
                    </div>
                </div>

                <p>Before comitting to a project, we consider software choices and techniques. When authoring environment assets, we provide source files and document workflows.</p>                
            </div>


            {/*<div className='col-span-1 pb-4 lg:pb0'>
                <img className='border-0 rounded-lg mx-auto' src='/substance.png' />
            </div>*/}
        </div>



    </div>
  );
}

export default Skills;