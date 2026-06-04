import { useState } from "react";
import { ArrowRight, Plus, Cpu, FileText, Server, Compass, Bot, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  title: string;
  org: string;
  desc: string;
  year: string;
  tag: string;
  accent: string;
  Icon: LucideIcon;
};

const items: Item[] = [
  {
    title: "NSF Lehigh ROV",
    org: "NSF RTA, Lehigh University",
    desc: "Built an autonomous underwater vehicle through the NSF Research program — 6-thruster AUV running on NVIDIA Jetson Nano.",
    year: "2025",
    tag: "Robotics",
    accent: "2nd place out of 103 projects at Lehigh Research Symposium",
    Icon: Cpu,
  },
  {
    title: "HPC Internship Program",
    org: "Texas State Division of IT",
    desc: "As the first undergraduate HPC intern in the Division of Information Technology, designed the framework for 30–40 student interns by 2027.",
    year: "Present",
    tag: "HPC Research",
    accent: "First undergraduate HPC intern at Texas State University",
    Icon: Server,
  },
  {
    title: "IEEE Publication",
    org: "IEEE CYBER 2024, Copenhagen",
    desc: "Published a peer-reviewed paper at the 14th IEEE International Conference on CYBER — IMU-based gait analysis for construction safety.",
    year: "2024",
    tag: "IEEE Publication",
    accent: "Published at 14th IEEE International Conference, Copenhagen — freshman year",
    Icon: FileText,
  },
  {
    title: "NSF I-Corps Northeast",
    org: "Lehigh and Princeton",
    desc: "Customer discovery program on underwater wireless communications — completed 25+ interviews with industry experts.",
    year: "2025",
    tag: "Entrepreneurship",
    accent: "25+ customer discovery interviews across industry",
    Icon: Compass,
  },
  {
    title: "AnimalCareBot",
    org: "USDA, Texas State Robotics Lab",
    desc: "Smart collar combining LiDAR, RFID, and IMU sensors for livestock monitoring research.",
    year: "2024",
    tag: "Robotics",
    accent: "USDA-funded research at Texas State Robotics Lab",
    Icon: Bot,
  },
  {
    title: "Muscle Fatigue Analysis",
    org: "CIVS Lab, Texas State",
    desc: "EMG and foot pressure sensors for construction-safety research — longitudinal study with field workers.",
    year: "2024–2026",
    tag: "Sensors",
    accent: "Ongoing study at the CIVS Lab",
    Icon: Activity,
  },
];

function Card({ item }: { item: Item }) {
  const Icon = item.Icon;
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-surface-elevated border border-border/60 transition-all duration-300 hover:border-teal/60 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--teal)_35%,transparent)] hover:-translate-y-1">
      {/* Icon header area */}
      <div className="relative flex h-44 items-center justify-center bg-gradient-to-b from-teal/[0.04] to-transparent">
        <Icon size={56} strokeWidth={1.25} className="text-foreground/15" />
        <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground/40">
          <Icon size={16} strokeWidth={1.75} />
        </span>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7 pt-5 space-y-4">
        <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal">
          {item.tag}
        </span>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight leading-tight">{item.title}</h3>
          <span className="shrink-0 pt-1 text-xs text-muted-foreground tabular-nums">{item.year}</span>
        </div>

        <p className="text-sm text-foreground/65 leading-relaxed">{item.desc}</p>

        <div className="pt-1 text-sm font-medium text-teal leading-snug">
          {item.accent}
        </div>
      </div>
    </article>
  );
}

export function Research() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 3);

  return (
    <section id="research" className="py-28 sm:py-36 bg-surface/40">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Research</h2>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">03 / 05</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((i) => <Card key={i.title} item={i} />)}
        </div>

        {!expanded && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground/80 hover:border-teal/50 hover:text-teal transition"
            >
              <Plus size={14} /> View All Research
            </button>
          </div>
        )}

        <a href="#projects" className="mt-14 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-teal transition">
          See what these led to <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
