"use client";

import Image from "next/image";

import "@/css/glitch-effect.css";
import { useEffect, useState } from "react";

const titles = ["Front-end", "Back-end", "UX/UI"];

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
    <div className="flex-none h-[calc(100%-60px)] flex flex-col justify-center items-center bg-hero-pattern bg-cover bg-top">
      <div className="grow w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="flex-none relative m-8">
          <Image
            src="/android-chrome-512x512.png"
            alt="Site Logo Image"
            className="w-full"
            width={500}
            height={500}
          />
          <div className="absolute top-8 lg:top-16 lg:-left-4 -rotate-12 text-center text-7xl lg:text-9xl font-cyberpunk text-yellow-300">
            Britton
            <br />
            Flynt
          </div>
        </div>
        <div
          className="absolute bottom-0 w-full hero glitch layers font-orbitron text-center text-4xl"
          data-text={titles[index]}
        >
          <span>{titles[index]}</span>
        </div>
      </div>
      <div className="flex-none bg-hero-pattern-fader h-16 w-full"></div>
    </div>
  );
}
