import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons/dist/ExternalLinkIcon";
import Link from "next/link";

import GithubSVG from "./GithubSVG";
import LinkedinSVG from "./LinkedinSVG";

export default function ContactLinks({ className }: { className?: string }) {
  return (
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      <Link
        target="_blank"
        prefetch={false}
        href="https://docs.google.com/document/d/1T8dMNeKkUQj0jxNnFAYOCLEvKRZfxbVzMhNjVrdMxNM/edit?usp=sharing"
      >
        <Button className="bg-yellow-300 hover:bg-cyan-300 text-black font-orbitron">
          <span className="pr-2">Resume</span>
          <ExternalLinkIcon />
        </Button>
      </Link>
      <div className="group border border-yellow-300 hover:border-cyan-300 rounded-md p-1">
        <Link
          target="_blank"
          prefetch={false}
          href="https://www.linkedin.com/in/philip-flynt-21b4a722/"
        >
          <LinkedinSVG className="w-6 h-6 fill-yellow-300 group-hover:fill-cyan-300" />
        </Link>
      </div>
      <div className="group border border-yellow-300 hover:border-cyan-300 rounded-md p-1">
        <Link
          target="_blank"
          prefetch={false}
          href="https://github.com/Vossryn"
        >
          <GithubSVG className="w-6 h-6 fill-yellow-300 group-hover:fill-cyan-300" />
        </Link>
      </div>
    </div>
  );
}
