"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

import { projects } from "@/constants";
import { SectionWrapper } from "@/hoc";
import JobTimeline from "./JobTimeline";

const ProjectCard = ({
  orientation = "left",
  image = "",
  title = "",
  description = "",
  techs = [],
  links = [],
}: {
  orientation?: "left" | "right";
  image: string;
  title: string;
  description: string;
  techs: string[];
  links: {
    href: string;
    name: string;
  }[];
}) => {
  return (
    <Tilt transitionSpeed={2500}>
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
          hover:shadow-md
          hover:shadow-cyan-300
        `}
      >
        <div
          className={`
            flex-none
            w-fit 
            mb-4
            sm:mb-0
            ${orientation === "right" ? "sm:ml-4" : "sm:mr-4"}
            bg-slate-700 
            rounded-sm 
            text-center
          `}
        >
          <Image
            src={image}
            alt={`${title} site image`}
            width={475}
            height={238}
            className="rounded-md border border-cyan-300"
          />
        </div>
        <div className="w-full">
          {title && <div>{title}</div>}
          {description && <div>{description}</div>}
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
      <div className="space-y-4 mt-8">
        {projects.map((di, i) => (
          <ProjectCard
            orientation={i % 2 === 0 ? "left" : "right"}
            {...di}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work", "Work", "");
