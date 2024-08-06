interface SectionHeadingProps {
  heading: string;
  subHeading: string;
}

export default function SectionHeading({ heading, subHeading }: SectionHeadingProps) {

  return (
    <>
      <h1 className="flex-grow font-orbitron text-yellow-300 text-5xl">
        {heading}
      </h1>
      <h3>
        {subHeading}
      </h3>
    </>
  )
}