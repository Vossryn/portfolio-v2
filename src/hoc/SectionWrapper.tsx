import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const SectionWrapper = (
  Component: React.ComponentType,
  idName: string = "",
  heading: string = "",
  subHeading: string = ""
) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        className="sm:px-12"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {heading && (
          <h1 className="flex-grow font-orbitron text-yellow-300 text-5xl pt-4 pb-8 text-center sm:text-left">
            {heading}
          </h1>
        )}
        {subHeading && <h3>{subHeading}</h3>}
        <div className="px-4">
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
