import { SectionWrapper } from "@/hoc";

const Contact = () => {
  return (
    <>
      <p>
        Why Work With Me?
      </p>
      <ul>
        <li>Passion: I genuinely love what I do, and that passion reflects in my work.</li>
        <li>Collaboration: I enjoy collaborating with fellow creatives and problem-solvers.</li>
        <li>Results-Driven: I focus on delivering results that exceed expectations.</li>
        <li>Continuous Growth: Learning is a lifelong journey, and I embrace it wholeheartedly.</li>
      </ul>
      <p>
        Let's Connect!
        Feel free to explore my portfolio and connect with me on LinkedIn or GitHub. I'd love to chat about video/tabletop gaming, coding, web technology or any exciting project you have in mind!
      </p>
    </>
  )
}

export default SectionWrapper(Contact, "contact", "Contact", "")
