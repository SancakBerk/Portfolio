'use client';
import React from 'react';
import Image from 'next/image';
import LinkedIn from '../Images/LinkedIn.png';
import Github from '../Images/Github.jpg';
import Navbar from '@/app/components/navbar';

function Banner() {
  const handleDownload = () => {
    const pdfUrl = '/resume.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Berk_Sancak_Resume';
    link.click();
  };

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
          <button
            onClick={handleDownload}
            className="bg-[#5a6272]  p-2 rounded-md mx-3 my-4 hover:bg-blue-900"
            id="Resume"
          >
            Click For Resume
          </button>
        </div>
      </div>
    </main>
  );
}

export default Banner;
