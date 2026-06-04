type Award = { title: string; year: string; context?: string; highlight?: boolean };

const awards: Award[] = [
  { title: "William Hatfield Hogue Memorial Endowed Scholarship — $15,000", year: "2026", highlight: true, context: "Highest-scoring applicant among all Juniors and Seniors at Texas State." },
  { title: "Gold Award, Most Spirited Student Leader — Maroon and Gold Awards", year: "2026", highlight: true, context: "University-wide recognition, Texas State." },
  { title: "Eugene Schurg Endowed Scholarship — Sigma Phi Epsilon", year: "2026" },
  { title: "Overall Balanced Man Scholarship — First recipient, Texas State", year: "2026" },
  { title: "Suzanne B. Patenaude Endowed Scholarship", year: "2026" },
  { title: "Jeffrey A. Slomka Memorial Scholarship in CS", year: "2026" },
  { title: "Texas State University Support Foundation Endowment", year: "2026" },
  { title: "2nd Place, Lehigh Summer Research Symposium — 103 projects", year: "2025" },
  { title: "HackMIT Top 10 — 1,100+ participants — Only Texas State student", year: "2025" },
];

export function Awards() {
  return (
    <section id="awards" className="py-28 sm:py-36 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Awards</h2>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">05 / 05</span>
        </div>

        <ul className="divide-y divide-border max-w-4xl">
          {awards.map((a) => (
            <li key={a.title} className="py-5 flex items-start justify-between gap-6">
              <div className="min-w-0 flex-1">
                <div className={`text-base sm:text-lg ${a.highlight ? "text-teal font-medium" : "text-foreground"}`}>
                  {a.title}
                </div>
                {a.context && (
                  <div className="mt-1.5 text-xs text-muted-foreground">{a.context}</div>
                )}
              </div>
              <span className="shrink-0 text-sm text-muted-foreground tabular-nums pt-0.5">{a.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
