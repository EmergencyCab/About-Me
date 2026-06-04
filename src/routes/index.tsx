import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Writings } from "@/components/sections/Writings";
import { Dispatches } from "@/components/sections/Dispatches";
import { Skills } from "@/components/sections/Skills";
import { SideQuest } from "@/components/sections/SideQuest";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prashant Panta — HPC Researcher, Writer, Builder" },
      { name: "description", content: "Personal site of Prashant Panta. HPC researcher, longform writer, and builder of things that did not exist before he arrived." },
      { property: "og:title", content: "Prashant Panta" },
      { property: "og:description", content: "HPC researcher, longform writer, builder. Kathmandu → San Marcos." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Research />
      <Projects />
      <Awards />
      <Writings />
      <Dispatches />
      <Skills />
      <SideQuest />
      <Contact />
    </main>
  );
}
