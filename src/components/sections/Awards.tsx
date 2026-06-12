import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type Award = {
  title: string;
  year: string;
  desc: string;
  highlight?: boolean;
};

const awards: Award[] = [
  {
    title: "William Hatfield Hogue Memorial Endowed Scholarship — $15,000",
    year: "2026",
    highlight: true,
    desc: "Highest-scoring applicant among all Juniors and Seniors at Texas State University.",
  },
  {
    title: "Gold Award, Most Spirited Student Leader — Maroon and Gold Awards",
    year: "2026",
    highlight: true,
    desc: "University-wide recognition for leadership and school spirit, Texas State.",
  },
  {
    title: "Overall Balanced Man Scholarship — First recipient, Texas State",
    year: "2026",
    highlight: true,
    desc: "First-ever recipient of this holistic achievement scholarship at Texas State.",
  },
  {
    title: "HackMIT Top 10 — 1,100+ participants",
    year: "2025",
    highlight: true,
    desc: "Top 10 finish at MIT's flagship hackathon — only Texas State student in attendance.",
  },
  {
    title: "Undergraduate Computer Science Excellence Award",
    year: "2026",
    desc: "Awarded to rising seniors for maintaining a strong GPA in Computer Science.",
  },
  {
    title: "Eugene Schurg Endowed Scholarship — Sigma Phi Epsilon",
    year: "2026",
    desc: "Academic scholarship awarded through the Sigma Phi Epsilon national fraternity.",
  },
  {
    title: "Suzanne B. Patenaude Endowed Scholarship",
    year: "2026",
    desc: "Merit-based endowed scholarship for outstanding academic performance.",
  },
  {
    title: "Jeffrey A. Slomka Memorial Scholarship in CS",
    year: "2026",
    desc: "Memorial scholarship recognizing excellence in Computer Science.",
  },
  {
    title: "Texas State University Support Foundation Endowment",
    year: "2026",
    desc: "Endowed scholarship recognizing academic and extracurricular achievement.",
  },
  {
    title: "2nd Place, Lehigh Summer Research Symposium — 103 projects",
    year: "2025",
    desc: "General Research category, out of 103 competing projects across Lehigh University.",
  },
];

export function Awards() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? awards : awards.slice(0, 3);

  return (
    <section id="awards" className="py-28 sm:py-36 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Honors &amp; Awards</h2>
        </div>

        <ul className="divide-y divide-border max-w-4xl">
          {visible.map((a) => (
            <li key={a.title} className="py-6 flex items-start justify-between gap-6">
              <div className="min-w-0 flex-1">
                <p className={`text-lg sm:text-xl leading-snug ${a.highlight ? "text-teal font-medium" : "text-foreground"}`}>
                  {a.title}
                </p>
                <p className="mt-1.5 text-sm sm:text-[15px] text-muted-foreground">{a.desc}</p>
              </div>
              <span className="shrink-0 text-sm text-muted-foreground tabular-nums pt-1">{a.year}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground/80 hover:border-teal/50 hover:text-teal transition"
          >
            {expanded ? <><Minus size={14} /> Show Less</> : <><Plus size={14} /> View All Honors &amp; Awards</>}
          </button>
        </div>
      </div>
    </section>
  );
}
