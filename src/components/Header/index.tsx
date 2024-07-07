import { linkProps } from "@/interfaces";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import LinkButton from "./LinkButton";

const _Links: linkProps[] = [
  {
    href: "/#home",
    name: "Home",
  },
  {
    href: "/#profile",
    name: "Profile",
  },
  {
    href: "/#projects",
    name: "Projects",
  },
  {
    href: "/#contact",
    name: "Contact",
  },
];

export default function Header() {

  return (
    <div className="flex justify-between items-center p-2 font-orbitron font-bold text-lg bg-black text-yellow-300 border-b border-b-yellow-300">
      <div>Britton Flynt</div>
      <div className="sm:hidden">
        <HamburgerMenuIcon className="w-10 h-10" />
      </div>
      <ul className="hidden sm:flex space-x-4">
        {_Links.map((di) => (
          <LinkButton key={di.name} {...di} />
        ))}
      </ul>
    </div>
  );
}
