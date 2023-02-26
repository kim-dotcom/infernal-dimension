import React from 'react';
import Heading from './snippets/heading';
import Link from 'next/link';
import Carousel from 'nuka-carousel';

const About = () => {
    const carouselText: string[] = [
        'Some commentary on the evil image',
        'Some more commentary on this evil image',
        'And this one. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit perspiciatis nemo excepturi dicta tenetur error.',
    ];
    
    return (
    <div className='w-full sm:min-h-[100vh] 3xl:min-h-[0] px-4 lg:px-12 py-12 bg-[#220d0d]'>
       <Heading sideText={'About'} mainText={'We build virtual environments'} />

        <div className='m-auto max-w-[1240px] 4xl:max-w-[1600px] grid-cols-4 gap-8'>
            <div className='col-span-2 pb-4'>
                <p className=''>Environment art involves authoring sets of thematic 3D assets. Level design is composing these assets to create virtual environments. Both of these disciplines overlap. This is a union of art and technology, aesthetics and spatial layouts. It is what we do.</p>

                {/* https://github.com/FormidableLabs/nuka-carousel */}
                <Carousel className='py-4 rounded-none'
                defaultControlsConfig={{
                    nextButtonText: '+',
                    prevButtonText: '+',
                    nextButtonStyle: {borderRadius: '0', fontSize: '2rem', backgroundColor: 'transparent'},
                    prevButtonStyle: {borderRadius: '0', fontSize: '2rem', backgroundColor: 'transparent'},
                    pagingDotsStyle: {fill: '#450808', paddingBottom: '20px'},
                }}
                renderTopCenterControls={({ currentSlide }) => (
                    <div className='pt-6 sm:pt-8 w-[640px] max-w-[80vw] mx-auto text-center opacity-30 text-md'>{carouselText[currentSlide]}</div>
                )}>
                    <img src="/ue4.jpg" />
                    <img src="/ue4.jpg" />
                    <img src="/ue4.jpg" />
                </Carousel>

                <p className=''>{process.env.title} offers its <Link className='text-red-800' href='' onClick={(e) => {e.preventDefault(); window.location.replace('/#services');}}>services</Link>. Do you want a virtual environment created, be it for a game, an art project, a visual composition? You can <Link href='/contact' className='text-red-800'>contact us</Link> and tell us about your needs. Alternatively, look around. See our showcase <Link href='/projects' className='text-red-800'>projects</Link>. Read the <Link href='/blog' className='text-red-800'>blog</Link>.</p>
            </div>
            
        </div>
    </div>
);
}

export default About;