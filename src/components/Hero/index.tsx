import Image from "next/image";

import "@/css/glitch-effect.css";

export default function Hero() {
  return (
    <div className="h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="relative flex flex-col items-center">
        <Image
          src="/android-chrome-512x512.png"
          alt="Site Logo"
          className="w-[350px] sm:w-[500px]"
          width={500}
          height={500}
        />
        <div className="absolute top-0 -left-12 -rotate-12 text-center text-8xl sm:text-9xl mt-14 sm:mt-28">
          <div className="font-cyberpunk font-extrabold absolute top-0 left-0 text-black">
            Britton
            <br />
            Flynt
          </div>
          <div className="font-cyberpunk absolute top-0 left-0 text-yellow-300">
            Britton
            <br />
            Flynt
          </div>
        </div>
      </div>
      <div
        className="hero glitch layers font-orbitron text-center text-xl sm:text-2xl"
        data-text="Web Developer"
      >
        <span>Web Developer</span>
      </div>
      <div className="absolute bg-hero-pattern-fader h-16 w-full bottom-0"></div>
    </div>
  );
}
