"use client";
import React from "react";
import Image from "next/image";
import LinkedIn from "../Images/LinkedIn.png";
import Github from "../Images/Github.jpg";
import Navbar from "@/app/components/navbar";
import ProfileImage from "../Images/ProfileImage.png";
import { motion } from "framer-motion";

function Banner() {
  const handleDownload = () => {
    const pdfUrl = "/Berk_Sancak_Resume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Berk_Sancak_Resume";
    link.click();
  };

  return (
    <main className="HeaderBackgroundImage bg-center w-screen h-screen relative  ">
      <div className="absolute w-full h-full bg-black opacity-70"></div>

      <Navbar />

      <div className=" relative w-full h-[694px] text-center flex justify-center items-center gap-28 max-sm:flex-col   ">
        <div className="w-auto h-auto z-20 text-white   ">
          <h1 className="text-[64px] max-[300px]:text-4xl max-[300px]:my-5 max-sm:text-4xl ">
            I&apos;m Berk Sancak
          </h1>
          <p className="text-[24px] ">Web Developer</p>
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
          <motion.button
            whileTap={{ scale: 0.1, transformOrigin: "center" }}
            whileHover={{ backgroundColor: "#00007B" }}
            onClick={handleDownload}
            className="bg-[#5a6272]  p-2 rounded-md mx-3 my-4 "
            id="Resume"
          >
            Click For Resume
          </motion.button>
        </div>
        <motion.div drag>
          <Image
            src={ProfileImage}
            height={200}
            width={200}
            draggable="false"
            className=" rounded-[20%]     "
          />
        </motion.div>
      </div>
    </main>
  );
}

export default Banner;
