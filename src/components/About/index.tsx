"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

import { Card, CardContent } from "@/components/ui/card";
import { aboutItems } from "@/constants";
import { SectionWrapper } from "@/hoc";

import JobTimeline from "./JobTimeline";
import "./styles.css";

const About = () => {
  const borderImageStyle = {
    borderWidth: "0px 20px",
    borderImage: `url("/svgs/voice-call-border.svg") 0 20 fill / 1 / 0 stretch`,
  };

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
          <Tilt key={index}>
            <Card
              style={borderImageStyle}
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
      <JobTimeline />
    </>
  );
};

export default SectionWrapper(About, "about", "ABOUT ME", "");
