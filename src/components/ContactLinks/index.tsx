import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import GithubSVG from "/public/svgs/social/github.svg";
import LinkedinSVG from "/public/svgs/social/linkedin.svg";

export default function ContactLinks({ className }: { className?: string }) {
  return (
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      <Link
        target="_blank"
        href="https://docs.google.com/document/d/1T8dMNeKkUQj0jxNnFAYOCLEvKRZfxbVzMhNjVrdMxNM/edit?usp=sharing"
      >
        <Button className="bg-yellow-300 hover:bg-yellow-300 text-black font-orbitron">
          <span className="pr-2">Resume</span>
          <ExternalLinkIcon />
        </Button>
      </Link>
      <div className="border border-yellow-300 rounded-md p-1">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/philip-flynt-21b4a722/"
        >
          <Image src={LinkedinSVG} alt="Linkedin Logo" className="w-6 h-6" />
        </Link>
      </div>
      <div className="border border-yellow-300 rounded-md p-1">
        <Link target="_blank" href="https://github.com/Vossryn">
          <Image src={GithubSVG} alt="Linkedin Logo" className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
