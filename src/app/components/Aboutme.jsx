import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import laptop from '@/app/Images/LaptopImage.png';
function Aboutme() {
  return (
    <div
      className="w-screen h-auto  bg-[#212121] flex flex-col items-center pt-20 "
      id="aboutid"
    >
      {/* FİRST ABOUT ME PİECE */}
      <div className="w-3/4 flex  justify-center items-center max-sm:flex-col ">
        <div className="  centerbackground  w-1/2 h-auto max-sm:w-full  relative  z-50 bg-[#212121] ">
          <Image src={laptop} alt="laptop" className="w-full h-auto" />
          <div className="absolute top-5 left-5 w-full h-full  border border-white rounded-t-md rounded-b-md -z-10 "></div>
        </div>
        <div className="flex flex-col p-6 w-1/2 justify-center items-center   max-sm:w-full">
          <h3 className="text-[#4C70EF] text-2xl m-2 font-semibold max-sm:text-xl ">
            About Me
          </h3>
          <h1 className="font-semibold text-4xl text-white m-2 max-[300px]:text-xs max-sm:text-xs max-md:text-3xl    ">
            I&apos;m Berk Sancak
          </h1>
          <p className="text-[#B0ADAD] text-base m-4 max-sm:text-xs text-justify ">
            Hello! I&apos;m Berk Sancak, a dedicated software developer. I
            specialize in developing web applications using React and Next.js,
            and for mobile applications, I choose Flutter and have a strong
            command of the Bloc architecture, ensuring efficient state
            management and robust application logic in my projects.. You can
            find more details about me and explore the projects I&apos;ve
            developed on my GitHub profile: My GitHub Profile.
          </p>
          <p className="text-[#B0ADAD] text-base m-4 max-sm:text-xs text-justify ">
            On the backend side, I prefer MySQL as the database and leverage
            Node.js to develop APIs, ensuring effective data management. In my
            projects, I focus not only on design but also on enhancing
            application performance and user experience. The projects on my
            GitHub profile provide a deeper insight into my technical skills and
            development capabilities. I am committed to adapting to new
            technologies and providing valuable support to your projects. Feel
            free to check out my GitHub profile for a comprehensive overview of
            my work.lop projects that are fast, scalable, and
            performance-oriented.
          </p>
        </div>
      </div>
      <div
        className="w-3/4 h-auto p-10 flex flex-col items-center justify-center my-8 max-sm:p-0 "
        id="whatido"
      >
        <h3 className="text-[#4C70EF] text-2xl font-semibold  tracking-wider p-5 max-[300px]:p-2 ">
          What I do
        </h3>
        <h1 className="text-4xl font-semibold p-5 text-center max-[300px]:text-2xl ">
          SPECIALIZING IN
        </h1>
        <div className="flex flex-row w-full p-5 max-sm:flex-col  ">
          <div className="w-1/2 flex flex-col bg-[#292C36] p-8 m-2 rounded-xl max-sm:w-full max-md:p-4 ">
            {/*specializingın each box */}
            <div className="flex flex-row items-center ">
              <div className="WhatIdofirst  w-[42px] h-[42px] p-4  m-2  bg-[#38405A] rounded-lg" />
              <h3 className="text-2xl w-[220px] m-2 max-sm:text-xl max-md:text-lg max-[300px]:text-xs">
                Web development
              </h3>
            </div>
            <p className="text-sm max-[300px]:text-xs text-justify">
              I focus on creating captivating and user-friendly interfaces using
              technologies like React, Next.js, and Tailwind CSS.
            </p>
          </div>

          <div className="w-1/2 flex flex-col bg-[#292C36] p-8 m-2 rounded-xl max-sm:w-full max-[300px]:text-sm max-[300px]:p-4 ">
            {/*specializingın each box */}
            <div className="flex flex-row items-center  ">
              <div className="WhatIdosecond  w-[42px] h-[42px] p-3 m-3   bg-[#38405A] rounded-lg" />
              <h3 className="text-2xl w-[220px] m-2 max-sm:text-sm max-md:text-lg max-[300px]:text-xs ">
                Mobile App Developement
              </h3>
            </div>
            <p className="text-sm max-[300px]:text-xs justify-normal text-justify ">
              I specialize in mobile development using Flutter and have a strong
              command of the Bloc architecture, ensuring efficient state
              management and robust application logic in my projects.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full" id="Portfolioid">
        <h3 className="text-[#4C70EF] text-2xl m-2 font-semibold">Portfolio</h3>
        <h1 className="font-semibold text-4xl text-white m-2 max-[300px]:text-2xl ">
          Latest Projects
        </h1>
        <div className=" w-full justify-center items-center flex flex-row max-lg:flex-col  max-lg:justify-center  max-lg:items-center p-4 ">
          <div className="w-1/4 h-[400px] flex  m-4  max-lg:w-full  ">
            <div className="bg-[#292C36] w-full h-auto rounded-s-md flex flex-col items-center   max-lg:w-full ">
              <Link
                href={'https://book-web-two.vercel.app/'}
                className=" LatestPojects1 bg-contain bg-center h-[250px] w-full bg-no-repeat  hover:scale-105 object-cover  "
              />
              <h3 className="m-3 ">Libary</h3>
              <Link
                href={'https://book-web-two.vercel.app/'}
                className="bg-[#558FFF] px-4 py-2 rounded-md mx-3 "
              >
                View
              </Link>
            </div>
          </div>

          <div className="w-1/4 h-[400px] flex  m-4  max-lg:w-full  ">
            <div className="bg-[#292C36] w-full h-[406px] max-lg rounded-s-md flex flex-col items-center p-4">
              <Link
                href={'https://sancakberk.github.io/'}
                className=" LatestProjects2 bg-contain bg-center h-[250px] w-full bg-no-repeat hover:scale-105 object-cover  "
              />
              <h3 className="m-3 ">Cafe Street Web Develope</h3>
              <Link
                className="bg-[#558FFF] px-4 py-2 rounded-md mx-3 "
                href={'https://sancakberk.github.io/'}
              >
                View
              </Link>
            </div>
          </div>

          <div className="w-1/4 h-[400px] flex  m-4  max-lg:w-full  ">
            <div className="bg-[#292C36] w-full h-[406px] rounded-s-md flex flex-col  cursor-pointer  items-center p-4 ">
              <div className=" LatestProjects3 bg-contain bg-center h-[250px] w-full bg-no-repeat  hover:scale-105 object-cover " />
              <h3 className="m-3 ">Travel App Develope</h3>
              <button
                className="bg-[#373d4a] px-4 py-2 rounded-md mx-3 cursor-pointer  "
                disabled
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#292C36]   w-2/3  h-[280px] my-10 rounded-xl flex justify-center items-center flex-col  "
        id="contactme"
      >
        <h1 className="text-2xl m-4 text-center  max-sm:text-xl ">
          Have any project in mind?
        </h1>
        <Link
          className="bg-[#558FFF] px-4 py-2 rounded-md mx-3 my-4 hover:bg-blue-900 "
          target="_blank"
          href="https://www.linkedin.com/in/berk-sancak-5086a2258/"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Aboutme;
