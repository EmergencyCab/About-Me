import { useState } from "react";
import { Download, ExternalLink, Maximize2, Minus, Plus, X, Users, BookOpen, GraduationCap, Award, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  name: string;
  tag: string;
  Icon: LucideIcon;
  cover?: string;
  url?: string;
  imageModal?: string;
};

const projects: Project[] = [
  {
    name: "Chautari",
    tag: "Education",
    Icon: Users,
    cover: "/photos/projects/Chautari_Cover.jpg",
    url: "https://chautari-two.vercel.app",
  },
  {
    name: "Pashupatinath Digital Archive",
    tag: "Heritage",
    Icon: BookOpen,
    cover: "/photos/projects/Pashupati_Cover.jpg",
    url: "https://pashupatinath.reinstallinghope.org",
  },
  {
    name: "Team Conclave",
    tag: "CalHacks · UC Berkeley",
    Icon: Zap,
    cover: "/photos/projects/CalHacks_Cover.jpg",
    url: "https://devpost.com/software/team-conclave",
  },
  {
    name: "Division of IT Internship Program",
    tag: "Program Design",
    Icon: GraduationCap,
    cover: "/photos/projects/VPIT_Cover.jpg",
    imageModal: "/photos/projects/VPIT_Cover.jpg",
  },
  {
    name: "Travel Grant Initiative",
    tag: "Policy",
    Icon: Award,
    cover: "/photos/projects/Travel_Cover.jpg",
    imageModal: "/photos/projects/Travel_Cover.jpg",
  },
];

function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-200 flex flex-col bg-black/96"
      onClick={onClose}
    >
      <div
        className="flex shrink-0 items-center justify-end gap-2 px-5 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={src}
          download
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/20 hover:text-white"
        >
          <Download size={12} /> Download
        </a>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
        >
          <X size={15} />
        </button>
      </div>

      <div
        className="flex flex-1 min-h-0 items-center justify-center px-6 pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt=""
          className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}

function Card({ p, onImageOpen }: { p: Project; onImageOpen: (src: string) => void }) {
  const Icon = p.Icon;
  const isLink = !!p.url;
  const isModal = !!p.imageModal;
  const isClickable = isLink || isModal;

  const handleClick = () => {
    if (isLink) window.open(p.url!, "_blank", "noreferrer");
    else if (isModal) onImageOpen(p.imageModal!);
  };

  const Wrapper = isClickable ? "article" : "article";

  return (
    <Wrapper
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={isClickable ? handleClick : undefined}
      onKeyDown={
        isClickable
          ? (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") handleClick(); }
          : undefined
      }
      className={`group relative overflow-hidden rounded-2xl bg-surface-elevated border border-border/60 transition-all duration-300 ${
        isClickable
          ? "cursor-pointer hover:border-teal/60 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--teal)_35%,transparent)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
          : ""
      }`}
    >
      {/* Cover image or icon placeholder */}
      {p.cover ? (
        <div className="relative h-44 overflow-hidden">
          <img
            src={p.cover}
            alt={p.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface-elevated/70 to-transparent" />
          <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80">
            {isLink ? <ExternalLink size={13} strokeWidth={2} /> : <Maximize2 size={13} strokeWidth={2} />}
          </span>
        </div>
      ) : (
        <div className="relative flex h-44 items-center justify-center bg-linear-to-b from-teal/4 to-transparent">
          <Icon size={56} strokeWidth={1.25} className="text-foreground/15" />
          <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground/40">
            <Icon size={16} strokeWidth={1.75} />
          </span>
        </div>
      )}

      <div className="p-6 sm:p-7 pt-5 space-y-3">
        <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal">
          {p.tag}
        </span>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight leading-tight">{p.name}</h3>
          {isLink && (
            <ExternalLink size={14} className="shrink-0 text-muted-foreground group-hover:text-teal transition-colors duration-200" />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export function Projects() {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-28 sm:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <Card key={p.name} p={p} onImageOpen={setModalSrc} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground/80 hover:border-teal/50 hover:text-teal transition"
            >
              {expanded ? <><Minus size={14} /> Show Less</> : <><Plus size={14} /> Show All Projects</>}
            </button>
          </div>
        )}

      </div>

      {modalSrc && <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />}
    </section>
  );
}
