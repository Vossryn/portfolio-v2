import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface linkProps {
  href: string;
  name: string;
}

const _Links: linkProps[] = [
  {
    href: "#home",
    name: "Home",
  },
  {
    href: "#profile",
    name: "Profile",
  },
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#contact",
    name: "Contact",
  },
];

export default function Header() {
  return (
    <div className="flex justify-between items-center p-2 font-orbitron font-bold text-lg bg-black text-yellow-300 border-b border-b-yellow-300">
      <div>Britton Flynt</div>
      <div className="sm:hidden">
        <HamburgerMenuIcon className="w-8 h-8 hover:bg-yellow-300 hover:text-black" />
      </div>
      <ul className="hidden sm:flex space-x-2">
        {_Links.map((di) => (
          <Link
            key={di.name}
            href={di.href}
            className="relative px-4 py-2 hover:bg-yellow-300 hover:text-black overflow-hidden"
          >
            {di.name}
            <div className="absolute bg-black rotate-45 w-8 h-8 -right-4"></div>
            <div className="absolute bg-black w-16 h-1 top-0 right-0 overflow-hidden"></div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
