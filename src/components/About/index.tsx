'use client'

import Image from "next/image"
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from "@/hoc";
import { aboutItems } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";

import "./styles.css";

const About = () => {

  const borderImageStyle = {
    borderWidth: "0px 20px",
    borderImage: `url("/svgs/voice-call-border.svg") 0 20 fill / 1 / 0 stretch`,
  }

  return (
    <>
      <p>
        I specialize in front-end working with ReactJS and CSS. Whether
        it&apos;s designing elegant user interfaces, writing efficient code,
        or creating captivating visual content, I thrive on turning ideas
        into reality. My journey began many years ago when I was taking
        general education courses in college and stumbled across a beginners
        HTML class. From that point on I was hooked on internet technologies
        and have been expanding my skills ever since.
      </p>
      <div className="flex flex-row flex-wrap justify-center items-center space-x-12 my-8">
        {
          aboutItems.map((di) => (
            <Tilt>
              <Card
                style={borderImageStyle}
                className="w-[200px] h-[250px] flex items-center justify-center bg-black text-white border-0 text-center"
              >
                <CardContent>
                  {di.title}
                  <Image
                    src={di.image}
                    width={64}
                    height={64}
                    alt={`${di.title} icon`}
                  />
                </CardContent>
              </Card>
            </Tilt>
          ))
        }
      </div>
      <div>
        Job Experience Timeline
      </div>
    </>
  );
};

export default SectionWrapper(About, "about", "ABOUT ME", "");
