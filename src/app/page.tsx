import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="grow">
      <Hero />
      <Profile />
      <Projects />
      <Contact />
    </main>
  );
}
