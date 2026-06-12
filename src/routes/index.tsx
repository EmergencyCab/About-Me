import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Leadership } from "@/components/sections/Leadership";
import { Awards } from "@/components/sections/Awards";
import { Writings } from "@/components/sections/Writings";
import { Skills } from "@/components/sections/Skills";
import { SideQuest } from "@/components/sections/SideQuest";
import { Contact } from "@/components/sections/Contact";
import { getClashStats } from "@/lib/api/clash.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prashant Panta" },
      { name: "description", content: "Personal site of Prashant Panta. HPC researcher, longform writer, and builder of things that did not exist before he arrived." },
      { property: "og:title", content: "Prashant Panta" },
      { property: "og:description", content: "HPC researcher, longform writer, builder. Kathmandu → San Marcos." },
    ],
  }),
  loader: async () => {
    const clashStats = await getClashStats();
    return { clashStats };
  },
  component: Index,
});

function Index() {
  const { clashStats } = Route.useLoaderData();
  return (
    <main>
      <About />
      <Research />
      <Projects />
      <Leadership />
      <Awards />
      <Writings />
      <Skills />
      <SideQuest clashStats={clashStats} />
      <Contact />
    </main>
  );
}
