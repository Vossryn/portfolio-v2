import Image from "next/image";

import "@/css/glitch-effect.css";

export default function Hero() {
  return (
    <div className="h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="relative">
        <Image
          src="/android-chrome-512x512.png"
          alt="Site Logo"
          className="w-[350px]"
          width={500}
          height={500}
        />
        <div className="absolute top-0 -rotate-12 text-center text-7xl md:text-9xl">
          <div className="font-cyberpunk font-extrabold absolute text-black">
            Britton Flynt
          </div>
          <div className="font-cyberpunk absolute text-yellow-300">
            Britton Flynt
          </div>
        </div>
        <div
          className="hero glitch layers font-orbitron text-center text-2xl absolute bottom-0 -bottom-36"
          data-text="Web Developer"
        >
          <span>Web Developer</span>
        </div>
      </div>

    </div>
  );
}
