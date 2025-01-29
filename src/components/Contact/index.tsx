"use client";

import SectionWrapper from "@/hoc/SectionWrapper";
import { CheckCircledIcon } from "@radix-ui/react-icons";

import ContactLinks from "../ContactLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8">
      <ContactForm />
      <div>
        <p className="text-xl">Why Work With Me?</p>
        <ul className="my-4 pl-2 flex flex-col gap-2">
          <li className="flex flex-row">
            <CheckCircledIcon className="flex-none h-8 w-8 mr-2 inline text-cyan-300" />
            <div>
              <span className="font-bold font-orbitron text-yellow-300">
                Passion
              </span>
              : I genuinely love what I do, and that passion reflects in my
              work.
            </div>
          </li>
          <li className="flex flex-row">
            <CheckCircledIcon className="flex-none h-8 w-8 mr-2 inline text-cyan-300" />
            <div>
              <span className="font-bold font-orbitron text-yellow-300">
                Collaboration
              </span>
              : I enjoy collaborating with fellow creatives and problem-solvers.
            </div>
          </li>
          <li className="flex flex-row">
            <CheckCircledIcon className="flex-none h-8 w-8 mr-2 inline text-cyan-300" />
            <div>
              <span className="font-bold font-orbitron text-yellow-300">
                Results-Driven
              </span>
              : I focus on delivering results that exceed expectations.
            </div>
          </li>
          <li className="flex flex-row">
            <CheckCircledIcon className="flex-none h-8 w-8 mr-2 inline text-cyan-300" />
            <div>
              <span className="font-bold font-orbitron text-yellow-300">
                Continuous Growth
              </span>
              : Learning is a lifelong journey, and I embrace it wholeheartedly.
            </div>
          </li>
        </ul>
        <p>
          Let&apos;s Connect! Feel free to explore my portfolio and connect with
          me on LinkedIn or GitHub. I&apos;d love to chat about video/tabletop
          gaming, coding, web technology or any exciting project you have in
          mind!
        </p>
        <ContactLinks className="mt-4" />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact", "Contact", "");
