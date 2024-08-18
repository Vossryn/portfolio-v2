"use client";

import Image from "next/image";

import "@/css/glitch-effect.css";
import "@/css/hero-text-stroke.css";
import { useEffect, useState } from "react";

const titles = ["Front-end", "Back-end"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = index + 1;
      if (newIndex > titles.length - 1) newIndex = 0;
      setIndex(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex-none h-full flex flex-col justify-center items-center bg-hero-pattern bg-cover bg-top">
      <div className="grow w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] mx-4 mt-4 md:mx-8 md:mt-8">
          <Image
            src="/android-chrome-512x512.png"
            alt="Site Logo Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="hero-name absolute top-8 -left-4 sm:top-16 -rotate-12 text-center text-6xl sm:text-8xl font-cyberpunk text-yellow-300">
            Britton
            <br />
            Flynt
          </div>
        </div>
        <div
          className="h-fit hero glitch layers font-orbitron text-center text-3xl lg:text-5xl"
          data-text={titles[index]}
        >
          <span>{titles[index]}</span>
        </div>
      </div>
      <div className="flex-none bg-gradient-to-t from-black h-16 w-full"></div>
    </div>
  );
}
