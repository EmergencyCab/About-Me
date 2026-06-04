import { ArrowRight, ExternalLink, Users, BookOpen, GraduationCap, Award, Library } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = { name: string; desc: string; url?: string; tag: string; Icon: LucideIcon };

const projects: Project[] = [
  {
    name: "Chautari",
    desc: "Co-founded platform for underprivileged Nepali students applying to college in the United States.",
    url: "https://chautari-two.vercel.app",
    tag: "Education",
    Icon: Users,
  },
  {
    name: "Pashupatinath Digital Archive",
    desc: "Co-created digital book preserving Pashupatinath stories through IRD Nepal.",
    url: "https://pashupatinath.reinstallinghope.org",
    tag: "Heritage",
    Icon: BookOpen,
  },
  {
    name: "Division of IT Internship Program",
    desc: "Designed framework for 30–40 student HPC interns at Texas State by 2027.",
    tag: "Program Design",
    Icon: GraduationCap,
  },
  {
    name: "STAR Grant Initiative",
    desc: "Proposed university-wide conference travel funding — presented to the TXST Provost, conditionally approved.",
    tag: "Policy",
    Icon: Award,
  },
  {
    name: "BookHive",
    desc: "Full-stack social platform for book lovers — five-person team, Software Engineering course.",
    tag: "Full-Stack",
    Icon: Library,
  },
];

function Card({ p }: { p: Project }) {
  const Icon = p.Icon;
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-surface-elevated border border-border/60 transition-all duration-300 hover:border-teal/60 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--teal)_35%,transparent)] hover:-translate-y-1">
      <div className="relative flex h-44 items-center justify-center bg-gradient-to-b from-teal/[0.04] to-transparent">
        <Icon size={56} strokeWidth={1.25} className="text-foreground/15" />
        <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground/40">
          <Icon size={16} strokeWidth={1.75} />
        </span>
      </div>
      <div className="p-6 sm:p-7 pt-5 space-y-4">
        <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal">
          {p.tag}
        </span>
        <h3 className="text-xl font-bold tracking-tight leading-tight">{p.name}</h3>
        <p className="text-sm text-foreground/65 leading-relaxed">{p.desc}</p>
        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:opacity-80 transition"
          >
            {p.url.replace(/^https?:\/\//, "")} <ExternalLink size={12} />
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Projects</h2>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">04 / 05</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => <Card key={p.name} p={p} />)}
        </div>

        <a href="#writing" className="mt-14 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-teal transition">
          Read about the thinking behind these <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
