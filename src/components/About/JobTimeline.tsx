"use client";

import { jobHistory } from "@/constants";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
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
}: {
  date: string;
  company: string;
  title: string;
  location: string;
  description: string;
  logo: string;
  skills: string[];
  index: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        visible={inView}
        position={Math.abs(index % 2) === 1 ? "right" : "left"}
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#334155",
          color: "#fff",
          boxShadow: "0 3px 0 #67e8f9",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #334155" }}
        date={date}
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
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{company}</h4>
        <h4 className="vertical-timeline-element-subtitle">{location}</h4>
        <p>{description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default function JobTimeline() {
  return (
    <VerticalTimeline lineColor="#fde047" className="space-y-8">
      {jobHistory.map((di, i) => {
        return <TimeLineItem {...di} index={i} key={i} />;
      })}
    </VerticalTimeline>
  );
}
