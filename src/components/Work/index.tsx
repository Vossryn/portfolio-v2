"use client";

import Tilt from "react-parallax-tilt";

import { SectionWrapper } from "@/hoc";
import JobTimeline from "./JobTimeline";

const ProjectCard = ({
  orientation = "left",
}: {
  orientation?: "left" | "right";
}) => {
  return (
    <Tilt>
      <div
        className={`
          flex 
          flex-col
          sm:flex-row 
          ${orientation === "right" ? "sm:flex-row-reverse" : ""}
          rounded-lg
          overflow-hidden
          border
          border-yellow-300
          bg-black
          p-2
        `}
      >
        <div
          className={`
            flex-none
            w-64
            h-48 
            ${orientation === "right" ? "ml-4" : "mr-4"}
            bg-slate-700 
            rounded-sm 
          `}
        ></div>
        <div className="w-full">
          <div>Project Title</div>
          <div>Project Description</div>
          <div>Project Tech</div>
          <div>Poeject Links</div>
        </div>
      </div>
    </Tilt>
  );
};

const Work = () => {
  return (
    <>
      <p className="mb-4">
        I believe in the power of simplicity and elegance. My work is a blend of
        creativity, functionality, and attention to detail. I&apos;m constantly
        learning and experimenting, pushing the boundaries of what&apos;s
        possible. When I&apos;m not coding or designing, you&apos;ll find me
        either hanging out with my family or off on my PC gaming. During the
        rest of my time I love to sit back and read everything from comics,
        webtoons, light novels and books or playing D&D things with my friends.
      </p>
      <JobTimeline />
      <div className="space-y-4 mt-4">
        <ProjectCard orientation="left" />
        <ProjectCard orientation="right" />
        <ProjectCard orientation="left" />
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work", "Work", "");
