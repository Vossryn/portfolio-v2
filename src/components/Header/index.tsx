"use client";

import { linkProps } from "@/interfaces";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";

import { useOutsideClick } from "@/lib/utils";
import ContactLinks from "../ContactLinks";
import LinkButton from "./LinkButton";

const _Links: linkProps[] = [
  {
    href: "/#about",
    name: "About",
  },
  {
    href: "/#work",
    name: "Work",
  },
  {
    href: "/#contact",
    name: "Contact",
  },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useOutsideClick(() => {
    setShowMenu(false);
  });

  return (
    <div className="relative flex justify-between items-center p-2 font-orbitron font-bold text-lg bg-black text-yellow-300 border-b border-b-yellow-300">
      <ContactLinks />
      <ul className="hidden sm:flex space-x-4">
        {_Links.map((di) => (
          <LinkButton key={di.name} {...di} />
        ))}
      </ul>
      <div className="sm:hidden">
        <HamburgerMenuIcon
          onClick={() => setShowMenu(!showMenu)}
          className="w-10 h-10"
        />
      </div>
      <motion.div
        ref={ref}
        initial={{ height: 0 }}
        animate={{ height: showMenu ? "auto" : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`
          absolute 
          top-full 
          right-0
          px-2
          w-full
          bg-black
          border-b
          border-yellow-300
          flex
          flex-col
          z-20
          text-center
          overflow-hidden
        `}
      >
        {_Links.map((di) => (
          <LinkButton
            key={di.name}
            {...di}
            className="my-4"
            onClick={() => setShowMenu(!showMenu)}
          />
        ))}
      </motion.div>
    </div>
  );
}
