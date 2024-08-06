import Image from "next/image";

import Section from "../Section";
import AboutMeItem from "./AboutMeItem";

import "./styles.css";

export default function Profile() {
  return (
    <div id="profile" className="bg-circuit-board pt-8 pb-24">
      <div className="p-4 sm:p-0 sm:w-3/5 sm:m-auto">
        <Section heading="Profile" subHeading="" />
        <div className="bg-yellow-300 p-0.5">
          <div className="corner-clip-br bg-black text-white p-4 pb-8 gap-4 flex flex-col sm:flex-row">
            <div>
              <Image
                src="/images/family-photo.jpeg"
                alt="Family Photo"
                className="w-[403px] rounded"
                width={403}
                height={538}
              />
            </div>
            <div className="space-y-4 sm:w-11/12">
              <AboutMeItem
                header="About Me"
                body={
                  <p className="sm:pl-4">
                    Hello there, people of the internet! I'm Britton Flynt, a passionate Full-stack
                    JavaScript developer based in Lewisville, NC, USA.
                  </p>
                }
              />

              <AboutMeItem
                header="What I Do"
                body={
                  <p className="sm:pl-4">
                    I specialize in front-end working with ReactJS and CSS. Whether it's designing
                    elegant user interfaces, writing efficient code, or creating captivating visual
                    content, I thrive on turning ideas into reality. My journey began many years ago
                    when I was taking general education courses in college and stumbled across a
                    beginners HTML class. From that point on I was hooked on internet technologies and
                    have been expanding my skills ever since.
                  </p>}
              />

              <AboutMeItem
                header="My Approach"
                body={
                  <p className="sm:pl-4">
                    I believe in the power of simplicity and elegance. My work is a blend of creativity,
                    functionality, and attention to detail. I'm constantly learning and experimenting,
                    pushing the boundaries of what's possible. When I'm not coding or designing, you'll
                    find me either hanging out with my family or off on my PC gaming. When I'm not doing
                    those things I love to sit back and read everything from comics, webtoons, light novels
                    and books or playing D&D things with my friends.
                  </p>
                }
              />

              <AboutMeItem
                header="Why Work With Me?"
                body={
                  <ul className="sm:pl-4">
                    <li>Passion: I genuinely love what I do, and that passion reflects in my work.</li>
                    <li>Collaboration: I enjoy collaborating with fellow creatives and problem-solvers.</li>
                    <li>Results-Driven: I focus on delivering results that exceed expectations.</li>
                    <li>Continuous Growth: Learning is a lifelong journey, and I embrace it wholeheartedly.</li>
                  </ul>
                }
              />

              <AboutMeItem
                header="Let's Connect!"
                body={
                  <p className="sm:pl-4">
                    Feel free to explore my portfolio and connect with me on LinkedIn or GitHub.
                    I'd love to chat about video/tabletop gaming, coding, web technology or any exciting
                    project you have in mind!
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
