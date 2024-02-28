import React from 'react';
import Image from 'next/image';
import Instagram from '../Images/Instagram.jpg';
import LinkedIn from '../Images/LinkedIn.png';
import Github from '../Images/Github.jpg';
import Navbar from './navbar';

function Banner() {
  return (
    <main className="HeaderBackgroundImage bg-center w-screen h-auto relative  ">
      <Navbar />
      <div className="darker"></div>
      <div className=" relative w-full h-[694px] text-center flex justify-center items-center flex-col ">
        <div className="absolute w-full h-screen "></div>
        <div className="w-1/2 h-auto z-20 text-white">
          <h1 className="text-[64px] max-[300px]:text-4xl max-[300px]:my-5 max-sm:text-4xl ">
            I&apos;m Berk Sancak
          </h1>
          <p className="text-[24px] ">Web And Mobile App Developer</p>
          <div className="flex items-center justify-center">
            <a
              className="w-[35px] h-[35px] bg-white m-1  rounded-full flex justify-center items-center overflow-hiddens p-2 "
              href="https://www.instagram.com/sancak__berk/"
            >
              <Image src={Instagram} alt="Instagram" />
            </a>
            <a
              className="w-[35px] h-[35px] bg-white m-1 rounded-full flex justify-center items-center overflow-hidden p-2  "
              href="https://www.linkedin.com/in/berk-sancak-5086a2258/"
            >
              <Image src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              className="w-[35px] h-[35px] bg-white m-1 rounded-full flex justify-center items-center overflow-hidden p-2  "
              href="https://github.com/SancakBerk"
            >
              <Image src={Github} className="" alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Banner;
