export default function Header() {
  return (
    <header className="flex justify-between p-4 font-orbitron font-bold text-lg">
      <div>Britton Flynt</div>
      <div>
        <ul className="flex gap-x-8">
          <li>HOME</li>
          <li>PROJECTS</li>
          <li>SKILLS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </header>
  );
}
