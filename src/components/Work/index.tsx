import { SectionWrapper } from "@/hoc";

function ProjectsCard() {
  return <div className="">Project Card</div>;
}

const Work = () => {
  return (
    <p>
      I believe in the power of simplicity and elegance.
      My work is a blend of creativity, functionality, and attention to detail.
      I'm constantly learning and experimenting, pushing the boundaries of what's possible.
      When I'm not coding or designing, you'll find me either hanging out with my family or off on my PC gaming.
      During the rest of my time I love to sit back and read everything from comics, webtoons,
      light novels and books or playing D&D things with my friends.
    </p>
  );
}

export default SectionWrapper(Work, "work", "Work", "")