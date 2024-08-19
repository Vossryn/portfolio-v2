"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { Button } from "@/components/ui/button";
import { IjobHistory, jobHistory } from "@/constants";

import "react-vertical-timeline-component/style.min.css";

const TimeLineItem = ({
  date,
  company,
  title,
  location,
  description,
  logo,
  skills,
  index,
}: { index: number } & IjobHistory) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        visible={inView}
        position={index % 2 === 0 ? "right" : "left"}
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#334155",
          color: "#fff",
          boxShadow: "0 3px 0 #67e8f9",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #334155" }}
        date={date}
        dateClassName="mx-4"
        iconStyle={{
          background: "#67e8f9",
          color: "#fff",
          boxShadow:
            " 0 0 0 4px #fde047, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)",
        }}
        icon={
          <Image
            className="rounded-full"
            alt={`${company} logo`}
            src={logo}
            width={64}
            height={64}
          />
        }
      >
        <h3 className="vertical-timeline-element-title font-bold text-lg">
          {title}
        </h3>
        <div className="flex flex-col justify-between gap-4">
          <div>
            <h4 className="vertical-timeline-element-subtitle text-slate-400">
              {company}
            </h4>
            <h4 className="vertical-timeline-element-subtitle text-slate-400">
              {location}
            </h4>
            <p>{description}</p>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {skills.map((di, i) => {
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
      </VerticalTimelineElement>
    </div>
  );
};

export default function JobTimeline() {
  return (
    <div className="space-y-8">
      <VerticalTimeline lineColor="#fde047">
        {jobHistory.map((di, i) => {
          return <TimeLineItem {...di} index={i} key={i} />;
        })}
      </VerticalTimeline>
    </div>
  );
}
