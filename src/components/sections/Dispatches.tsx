import { ArrowRight } from "lucide-react";

const dispatches = [
  { title: "SC25 — My First Supercomputing Conference", desc: "Notes from the show floor, the talks, the people.", date: "Nov 2025" },
];

export function Dispatches() {
  return (
    <section id="dispatches" className="py-28 sm:py-36 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Dispatches</h2>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">Field Notes</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {dispatches.map((d) => (
            <article key={d.title} className="card-hover rounded-2xl border border-border/70 bg-card/70 p-8">
              <div className="text-[11px] text-muted-foreground mb-4 tabular-nums">{d.date}</div>
              <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed mb-5">{d.desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-teal transition">
                Read <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <a href="/now" className="mt-14 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-teal transition">
          What I'm doing right now <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
