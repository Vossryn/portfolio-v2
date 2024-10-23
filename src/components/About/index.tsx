"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

import { Card, CardContent } from "@/components/ui/card";
import { aboutItems, technologies } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { cardBorderImageStyle } from "@/lib/utils";

import { Suspense } from "react";
import "./styles.css";

const LazyBall = dynamic(() => import("./Ball"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const About = () => {
  return (
    <>
      <p>
        I specialize in front-end working with ReactJS and CSS. Whether
        it&apos;s designing elegant user interfaces, writing efficient code, or
        creating captivating visual content, I thrive on turning ideas into
        reality. My journey began many years ago when I was taking general
        education courses in college and stumbled across a beginners HTML class.
        From that point on I was hooked on internet technologies and have been
        expanding my skills ever since.
      </p>
      <div className="flex flex-row flex-wrap justify-center items-center my-8">
        {aboutItems.map((di, index) => (
          <Tilt key={index} scale={1.15} transitionSpeed={2500}>
            <Card
              style={cardBorderImageStyle}
              className="w-[250px] h-[300px] bg-black text-white border-0 m-4"
            >
              <CardContent className="flex flex-col justify-center items-center space-y-4 h-full">
                <p className="font-orbitron text-3xl">{di.title}</p>
                <Image
                  src={di.image}
                  width={64}
                  height={64}
                  alt={`${di.title} icon`}
                />
              </CardContent>
            </Card>
          </Tilt>
        ))}
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {technologies.map((icon) => {
          return (
            <div key={icon} className="h-32 w-32">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyBall icon={icon} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about", "ABOUT ME", "");
