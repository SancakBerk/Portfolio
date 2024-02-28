'use client';
import React, { useState } from 'react';
function navbar() {
  const [responsive, setResponsive] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);

  const handleToggle = () => {
    if (responsive) {
      setExitAnimation(true);
      // İsteğe bağlı olarak animasyon süresini bekleyebilirsiniz.
      setTimeout(() => {
        setResponsive(false);
        setExitAnimation(false);
      }, 500); // Milisaniye cinsinden süreyi ayarlayabilirsiniz.
    } else {
      setResponsive(true);
    }
  };
  return (
    <div className="w-full h-auto p-4 flex flex-col  items-center justify-between relative  ">
      <div className="w-full h-auto flex flex-row justify-between items-center">
        {/* NAVBAR LEFT SİDE BERK */}
        <div className="z-20 ">
          <a href="/">
            <h1 className="text-xl text-white p-2 font-semibold  ">Berk</h1>
          </a>
        </div>
        {/* NAVBAR RİGHT SİDE */}
        <div
          className={`w-auto h-auto flex flex-row p-2 items-start justify-center z-20   ${
            responsive
              ? ' max-sm:flex  absolute top-0 left-0 right-0  w-full h-96 flex flex-col justify-center items-center bg-[#212121] z-30 animasyonkullan '
              : 'max-sm:hidden'
          } 
          ${exitAnimation ? 'cikisanimasyon' : ''}
       `}
        >
          {responsive ? (
            <div className="w-full h-auto flex justify-between">
              <a href="/">
                <h1 className="text-xl text-white p-2 font-semibold  ">Berk</h1>
              </a>
              <button className="absolute top-6 right-4" onClick={handleToggle}>
                <h1>X</h1>
              </button>
            </div>
          ) : (
            ''
          )}
          <a href="#aboutid">
            <h1 className="text-xl text-white p-2 m-2 font-semibold ">About</h1>
          </a>
          <a href="#whatido">
            <h1 className="text-xl text-white p-2 m-2 font-semibold">
              What I Do
            </h1>
          </a>
          <a href="#Portfolioid">
            <h1 className="text-xl text-white p-2 m-2 font-semibold">Work</h1>
          </a>
          <a href="#contactme">
            <h1 className="text-xl text-white p-2 m-2 font-semibold">
              Contact
            </h1>
          </a>
        </div>
        {/* HAMBURGER MENU */}
        <button className="z-10 hidden max-sm:flex" onClick={handleToggle}>
          <h1>X</h1>
        </button>
      </div>

      {/* <div
        className={`w-auto h-auto  flex-row p-2 items-start justify-center z-20  hidden animasyonkullan ${
          responsive
            ? 'flex  w-full h-auto  flex-col justify-center items-center bg-black max-sm:flex '
            : 'hidden'
        }`}
      >
        <a href="#aboutid">
          <h1 className="text-xl text-white p-2 m-2 font-semibold ">About</h1>
        </a>
        <a href="#whatido">
          <h1 className="text-xl text-white p-2 m-2 font-semibold">
            What I Do
          </h1>
        </a>
        <a href="#Portfolioid">
          <h1 className="text-xl text-white p-2 m-2 font-semibold">Work</h1>
        </a>
        <a href="#contactme">
          <h1 className="text-xl text-white p-2 m-2 font-semibold">Contact</h1>
        </a>
      </div> */}
    </div>
  );
}

export default navbar;
