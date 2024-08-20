import { SectionWrapper } from "@/hoc";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-8">
      <ContactForm />
      <div>
        <p className="text-xl">Why Work With Me?</p>
        <ul className="my-4 pl-2">
          <li>
            <CheckCircledIcon className="h-8 w-8 mr-2 inline text-cyan-300" />
            <span className="font-bold font-orbitron">Passion</span>: I
            genuinely love what I do, and that passion reflects in my work.
          </li>
          <li>
            <CheckCircledIcon className="h-8 w-8 mr-2 inline text-cyan-300" />
            <span className="font-bold font-orbitron">Collaboration</span>: I
            enjoy collaborating with fellow creatives and problem-solvers.
          </li>
          <li>
            <CheckCircledIcon className="h-8 w-8 mr-2 inline text-cyan-300" />
            <span className="font-bold font-orbitron">Results-Driven</span>: I
            focus on delivering results that exceed expectations.
          </li>
          <li>
            <CheckCircledIcon className="h-8 w-8 mr-2 inline text-cyan-300" />
            <span className="font-bold font-orbitron">Continuous Growth</span>:
            Learning is a lifelong journey, and I embrace it wholeheartedly.
          </li>
        </ul>
        <p>
          Let&apos;s Connect! Feel free to explore my portfolio and connect with
          me on LinkedIn or GitHub. I&apos;d love to chat about video/tabletop
          gaming, coding, web technology or any exciting project you have in
          mind!
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact", "Contact", "");
