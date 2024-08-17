"use client";

import { linkProps } from "@/interfaces";
import Link from "next/link";
import { useState } from "react";

export default function LinkButton({ href, name }: linkProps) {
  const [hover, setHover] = useState(false);

  const borderImageStyle = {
    borderWidth: "0px 20px",
    borderImage: `url("/svgs/button-${hover ? "cyan" : "yellow"}.svg") 0 20 fill / 1 / 0 stretch`,
  };

  return (
    <Link
      key={name}
      href={href}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative px-4 py-2 text-yellow-300 hover:text-cyan-300 min-w-28"
      style={borderImageStyle}
    >
      <span>{name}</span>
    </Link>
  );
}
