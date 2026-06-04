import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now — Prashant Panta" },
      { name: "description", content: "What Prashant is working on, reading, and thinking about right now." },
      { property: "og:title", content: "Now — Prashant Panta" },
      { property: "og:description", content: "What I'm working on right now." },
    ],
  }),
  component: NowPage,
});

function NowPage() {
  return (
    <main className="min-h-screen pt-36 pb-32">
      <article className="container mx-auto px-6 max-w-2xl">
        <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">
          LAST UPDATED · DECEMBER 2026
        </div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight mb-10">
          Now<span className="text-teal">.</span>
        </h1>

        <div className="space-y-6 text-lg leading-[1.7] text-foreground/85">
          <p>
            In San Marcos. Wrapping up the LEAP2 benchmarking work for the
            Division of IT — capacity planning notes that will outlive me here.
          </p>
          <p>
            Reading <em className="text-foreground">The Information</em> by James
            Gleick, slowly, the way it deserves. Started writing a longer piece
            on what HPC taught me about access — keeps getting longer.
          </p>
          <p>
            Saying yes to fewer things on purpose. Saying yes to the right
            people more often. Trying to be in one room at a time.
          </p>
          <p className="text-muted-foreground text-base pt-4 border-t border-border">
            If something here looks like a thread worth pulling, write to me.
          </p>
        </div>
      </article>
    </main>
  );
}
