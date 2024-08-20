"use client";

import { linkProps } from "@/interfaces";
import { useButtonBorderImage } from "@/lib/utils";
import Link from "next/link";

export default function LinkButton({
  href,
  name,
  className,
  onClick = () => null,
}: { className?: string; onClick?: () => void } & linkProps) {
  const [borderImageStyle, setHover] = useButtonBorderImage(false);

  return (
    <Link
      key={name}
      href={href}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className={`relative px-4 py-2 text-yellow-300 hover:text-cyan-300 min-w-28 ${className}`}
      style={borderImageStyle}
    >
      <span>{name}</span>
    </Link>
  );
}
