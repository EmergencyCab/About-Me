const chapter1 = [
  "Founded student council in 10th grade",
  "President, Xavier Youth Red Cross",
  "Co-founded AuraEd — taught CS to 170+ underprivileged students",
  "Executive board, Squad of ChangeMakers — Nepal's biggest STEAM camp, 10,000+ visitors",
  "SEDS Nepal high-altitude balloon project",
  "Karkhana STEAM facilitator — established STEM clubs in seven schools",
];

const chapter2 = [
  "Arrived as first-generation international student",
  "Cold-emailed a professor freshman year → IEEE paper published nine months later",
  "NSF internship at Lehigh University — 2nd of 103 projects",
  "HackMIT Top 10 out of 1,100+ participants",
  "First undergraduate HPC intern at Texas State",
  "Created the first Director of International Affairs position in Student Government",
  "William Hatfield Hogue Memorial Scholar — $15,000 — most prestigious student leadership award at Texas State",
];

function Chapter({ title, place, items }: { title: string; place: string; items: string[] }) {
  return (
    <div className="relative">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="text-[10px] tracking-[0.3em] text-teal">{title}</span>
        <span className="h-px flex-1 bg-border" />
        <span className="text-sm font-medium text-foreground">{place}</span>
      </div>
      <ul className="space-y-3 border-l border-border pl-5">
        {items.map((t, i) => (
          <li key={i} className="relative text-sm text-foreground/75 leading-relaxed">
            <span className="absolute -left-[1.42rem] top-2 h-1.5 w-1.5 rounded-full bg-teal/50" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-baseline justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">02 / 05</span>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          <div className="space-y-6">
            <div className="aspect-[4/5] w-full rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center text-center text-xs text-muted-foreground p-4">
              [REAL PHOTO HERE — not a headshot, the Bill Poston moment photo]
            </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              I grew up in Kathmandu and now study and work in San Marcos, Texas.
              I spend my time on high-performance computing research, on writing
              that takes longer than it should, and on building things — software,
              programs, positions — that did not exist before I started.
            </p>

            {/* Discovered coordinate moment */}
            <div className="mt-8 rounded-xl border border-border/60 bg-surface/40 p-5 font-mono text-[11px] leading-relaxed text-muted-foreground">
              <div className="flex justify-between gap-4">
                <span className="text-foreground/80">KTM</span>
                <span>27.7172° N · 85.3240° E</span>
              </div>
              <div className="my-1.5 flex items-center gap-2">
                <span className="h-px flex-1 bg-border" />
                <span className="text-teal">11h 45m</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-foreground/80">SMX</span>
                <span>29.8833° N · 97.9414° W</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <Chapter title="CHAPTER 01" place="Kathmandu" items={chapter1} />
            <Chapter title="CHAPTER 02" place="San Marcos" items={chapter2} />
          </div>
        </div>
      </div>
    </section>
  );
}
