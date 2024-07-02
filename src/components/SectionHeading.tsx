interface SectionHeadingProps {
  heading: string
}

export default function SectionHeading({ heading }: SectionHeadingProps) {

  const borderImageStyle = {
    borderWidth: "0px 20px",
    borderImage: `url("/svgs/button-yellow.svg") 0 20 fill / 1 / 0 stretch`,
  }

  return (
    <h1 className="flex-grow font-orbitron text-yellow-300 text-5xl my-8 h-20 flex flex-col justify-center" style={borderImageStyle}>
      <span>{heading}</span>
    </h1>
  )
}