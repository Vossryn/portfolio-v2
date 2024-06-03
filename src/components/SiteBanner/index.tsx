import Image from "next/image";

import "@/css/glitch-effect.css";

export default function SiteBanner() {
  return (
    <div className="relative">
      <div className="absolute top-2">
        <div className="absolute -rotate-12 top-32 text-center -ml-12">
          <div className="font-cyberpunk font-extrabold text-9xl absolute text-black">
            Britton Flynt
          </div>
          <div className="font-cyberpunk text-9xl absolute text-yellow-300">
            Britton Flynt
          </div>
        </div>
        <h2
          className="hero glitch layers absolute top-[21rem] w-[50rem] -ml-[8rem]"
          data-text="Web Developer"
        >
          <span>Web Developer</span>
        </h2>
      </div>
      <Image
        src="/android-chrome-512x512.png"
        alt="Site Logo"
        width={500}
        height={500}
      />
    </div>
  );
}
