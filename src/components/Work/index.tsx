"use client";

import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

import { Button } from "@/components/ui/button";
import { Iprojects, projects } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import JobTimeline from "./JobTimeline";

const ProjectCard = ({
  orientation = "left",
  image = "",
  title = "",
  description = "",
  techs = [],
  links = [],
}: { orientation: string } & Iprojects) => {
  return (
    <Tilt transitionSpeed={2500}>
      <motion.div
        className={`flex flex-col sm:flex-row ${orientation === "right" ? "sm:flex-row-reverse" : ""} rounded-lg overflow-hidden border border-yellow-300 bg-black p-4`}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
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
            className="rounded-md"
          />
        </div>
        <div className="w-full flex flex-col justify-between gap-4">
          <div className="space-y-2">
            {title && <div className="text-xl font-bold">{title}</div>}
            {description && <div>{description}</div>}
          </div>
          <div className="flex flex-row space-x-4 w-full">
            {links.map(({ href, name, icon }, i) => {
              return (
                <Link key={i} prefetch={false} href={href} title={name}>
                  {icon === "website" && <GlobeIcon className="w-8 h-8" />}
                  {icon === "github" && <GitHubLogoIcon className="w-8 h-8" />}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {techs.map((di, i) => {
              return (
                <Button
                  className="bg-cyan-300 text-black hover:bg-cyan-300 hover:text-black cursor-default font-orbitron"
                  key={i}
                >
                  {di}
                </Button>
              );
            })}
          </div>
        </div>
      </motion.div>
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
