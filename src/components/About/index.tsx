import { SectionWrapper } from "@/hoc";

import "./styles.css";

const About = () => {
  return (
    <div id="about" className="bg-circuit-board py-8">
      <div className="p-4 sm:p-0 sm:w-3/5 sm:m-auto">
        <div className="bg-black rounded-md p-4">
          <p>
            I specialize in front-end working with ReactJS and CSS. Whether
            it&apos;s designing elegant user interfaces, writing efficient code,
            or creating captivating visual content, I thrive on turning ideas
            into reality. My journey began many years ago when I was taking
            general education courses in college and stumbled across a beginners
            HTML class. From that point on I was hooked on internet technologies
            and have been expanding my skills ever since.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about", "About Me", "");
