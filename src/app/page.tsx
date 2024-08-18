import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

import "./styles.css";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="with-fader bg-black p-4 pb-8 sm:p-0 sm:pb-12 sm:w-3/5 md:w-4/5 sm:m-auto space-y-4 relative">
        <About />
        <Work />
        <Contact />
      </div>
    </>
  );
}
