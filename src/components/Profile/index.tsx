import SectionHeading from "../SectionHeading";

import "./styles.css";

export default function Profile() {
  return (
    <div id="#profile" className="bg-circuit-board pt-8 pb-24">
      <div className="p-4 sm:p-0 sm:w-3/5 sm:m-auto">
        <SectionHeading heading="Profile" />
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-2 border text-white rounded-lg p-2">
            <div className="border text-white rounded-lg min-h-36 min-w-36">Family Image</div>
            <div>Personal Info</div>
          </div>
          <div className="flex-grow bg-yellow-300 p-0.5">
            <div className="corner-clip-br bg-black text-white p-2 space-y-4">
              <p>
                Hello there people of the internet! My name is Britton Flynt, I'm a family man from North Carolina
                with a wife and two wonderful kids.
              </p>
              <p>
                I'm a highly motivated web developer that loves to work on both the front-end and back-end of the tech stack.
                Having always had a passionn for creating, designing and building things I discoverd one day, during an elective
                class,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
