import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function Header() {
  return (
    <div className="flex justify-between items-center p-2 font-orbitron font-bold text-lg">
      <div>Britton Flynt</div>
      <div>
        <HamburgerMenuIcon />
      </div>
      {/* <ul className="flex gap-x-8">
        <li>HOME</li>
        <li>PROJECTS</li>
        <li>SKILLS</li>
        <li>CONTACT</li>
      </ul> */}
    </div>
  );
}
