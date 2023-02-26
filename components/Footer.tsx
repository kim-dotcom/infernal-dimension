import React from 'react'
import {BsGithub} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';

let isPlaying: boolean = false;
let firstPlay: boolean = true;
let playFrom:number = 0; //135 works too, to start mid-theme (Viscera_theme.mp3)

function playTheme (): void {
    let audioTheme = document.getElementById('audioTheme') as any;   
    if (audioTheme !== null) {
        if (firstPlay) {
            audioTheme.currentTime = playFrom;
            audioTheme.loop = true;
            firstPlay = false;        
        }  
        isPlaying ? audioTheme.pause() : audioTheme.play();
        isPlaying = !isPlaying;
    }
}

const Footer = () => {
  return (
    <div id='bottom' className='w-full h-14 4xl:h-20 px-4 4xl:py-3 lg:px-12 bg-[#450808]'>
        <div className='flex justify-between max-w-[1240px] 4xl:max-w-[1600px] mx-auto items-center pt-5'>
            <span className='flex'>
                Youtube <AiFillYoutube className='ml-2 mr-6 mt-[-5px] w-8 h-8' />
                GitHub <BsGithub className='ml-2 mr-6 mt-[-5px] w-7 h-7' />
                Twitter <AiFillTwitterCircle className='ml-2 mr-6 mt-[-6px] w-8 h-8'/>
            </span>
            <audio id='audioTheme' src='/Viscera_theme.mp3'></audio>
            <span className='flex cursor-pointer mt-[-5px]' onClick={playTheme}>See you in hell!</span>
        </div>
    </div>
  );
}

export default Footer;