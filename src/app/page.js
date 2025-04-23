"use strict";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Logo from "./components/Logo";
export default function Home() {
  return (
    <main className="relative h-full w-screen  ">
      <Hero />
      <Aboutme />
      <Logo />
    </main>
  );
}
