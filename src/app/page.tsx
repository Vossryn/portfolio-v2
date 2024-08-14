import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-black p-8 sm:p-0 sm:w-3/5 sm:m-auto space-y-4">
        <About />
        <Work />
        <Contact />
      </div>
    </>
  );
}
