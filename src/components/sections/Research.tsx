import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Minus,
  Plus,
  Cpu,
  FileText,
  Server,
  Compass,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type CaptionedPhoto = {
  src: string;
  caption?: string;
};

type Item = {
  title: string;
  org: string;
  desc: string;
  year: string;
  tag: string;
  accent: string;
  Icon: LucideIcon;
  cover?: string;
  intro?: string;
  bullets?: string[];
  skills?: string[];
  gallery?: string[];
  galleryCaptioned?: CaptionedPhoto[];
  link?: string;
  linkLabel?: string;
};

const items: Item[] = [
  {
    title: "IEEE UEMCON Publication",
    org: "IEEE UEMCON 2026",
    desc: "Published a peer-reviewed paper with Dr. Damian Valles at IEEE UEMCON — a sustained-run benchmarking study of deep learning training on Texas State's LEAP2 HPC cluster.",
    year: "2026",
    tag: "IEEE Publication",
    accent: "Published at IEEE UEMCON 2026, with Dr. Damian Valles",
    Icon: FileText,
    cover: "/photos/research/UEMCON_BG.jpeg",
    link: "/photos/research/IEEE_UEMCON.pdf",
    linkLabel: "View Paper (PDF) →",
    intro:
      "Co-authored with Dr. Damian Valles, this paper studies how deep learning training actually behaves over long, sustained runs rather than short controlled benchmarks. We trained ResNet-50, ViT-B/16, and BERT-base on Texas State's LEAP2 cluster across 100- and 250-epoch runs, logging throughput, GFLOPs/s, memory, and accuracy every epoch to surface hardware behavior that short benchmarks miss.",
    bullets: [
      "Identified model- and batch-dependent CPU slowdown consistent with thermal throttling — ResNet-50 lost 13–30% of its compute rate within a single run",
      "Detected GPU throughput interference from node co-tenancy, with jobs lacking exclusive access dropping to roughly half throughput in 6 of 27 sweep runs",
      "Measured ~0.4 GB of host memory growth over 250 epochs in transformer models, costing ViT-B/16 about 5% throughput over the run",
      "Quantified GPU speedup across models, ranging from 7.9x to 28.3x over CPU training",
    ],
    skills: [
      "Python",
      "PyTorch",
      "SLURM",
      "HPC Benchmarking",
      "GPU Profiling",
      "Deep Learning",
      "Data Analysis",
    ],
  },
  {
    title: "HPC Internship",
    org: "Texas State Division of IT",
    desc: "As the first undergraduate HPC intern in the Division of Information Technology, benchmarked the LEAP2 cluster as the university prepared for R1 classification.",
    year: "2025",
    tag: "HPC Research",
    accent: "First undergraduate HPC intern at Texas State University",
    Icon: Server,
    cover: "/photos/research/hpc-cover.jpeg",
    galleryCaptioned: [
      {
        src: "/photos/research/hpc-illustration.jpg",
        caption: "An illustration of the LEAP2 cluster architecture",
      },
      { src: "/photos/research/hpc-real-cluster.jpg", caption: "The LEAP2 cluster" },
      { src: "/photos/research/hpc-us.jpeg", caption: "With the Division of IT team" },
      { src: "/photos/research/hpc-pre.jpg", caption: "Benchmarking results before optimization" },
      { src: "/photos/research/hpc-pro.jpg", caption: "Benchmarking results after optimization" },
      {
        src: "/photos/research/hpc-certificates.jpeg",
        caption: "Certificates from HPC training and coursework",
      },
    ],
    intro:
      "As the first undergraduate intern in Texas State's Division of IT, I was embedded in the VP of IT cabinet during the university's push toward R1 research classification. The work grew well beyond the original benchmarking mandate.",
    bullets: [
      "Benchmarked the LEAP2 HPC cluster and established performance baselines for R1 research readiness",
      "Analyzed SLURM scheduler logs to identify throughput bottlenecks and GPU utilization patterns",
      "Initiated and led discussions with senior engineers on GPU architecture and accelerator configuration for research workloads",
      "Documented departing staff's institutional knowledge to preserve system continuity",
      "Designed an IT internship program framework from scratch, built to scale to 30–40 student interns by 2027",
      "Co-authored a peer-reviewed paper on the benchmarking results, published at IEEE UEMCON 2026",
    ],
    skills: [
      "HPC",
      "SLURM",
      "Linux",
      "Bash",
      "Python",
      "GPU Benchmarking",
      "Systems Documentation",
    ],
  },
  {
    title: "NSF Lehigh ROV",
    org: "NSF RTA, Lehigh University",
    desc: "Built an autonomous underwater vehicle through the NSF Research program — 6-thruster AUV running on NVIDIA Jetson Nano.",
    year: "2025",
    tag: "Robotics",
    accent: "2nd place out of 103 projects at Lehigh Research Symposium",
    Icon: Cpu,
    cover: "/photos/research/lehigh-cover.jpeg",
    galleryCaptioned: [
      {
        src: "/photos/research/lehigh-team.jpeg",
        caption: "With my team at the Lehigh Research Symposium",
      },
      {
        src: "/photos/research/lehigh-me.jpeg",
        caption: "Presenting our project at the symposium",
      },
      {
        src: "/photos/research/lehigh-presentation.jpeg",
        caption: "Walking through our AUV design",
      },
      { src: "/photos/research/lehigh-poster.jpeg", caption: "Our research poster" },
      { src: "/photos/research/lehigh-p2.jpeg", caption: "2nd place out of 103 projects" },
      { src: "/photos/research/lehigh-prototype.jpg", caption: "Our six-thruster AUV prototype" },
      { src: "/photos/research/lehigh-drone.jpg", caption: "With our BlueROV" },
      {
        src: "/photos/research/lehigh-mehdi.jpg",
        caption: "With Mehdi, a graduate intern on our team",
      },
      { src: "/photos/research/lehigh-ayoola.jpg", caption: "With my partner Ayoola" },
    ],
    intro:
      "In summer 2025 I was the only international student accepted into Lehigh University's NSF Research Translation Accelerator cohort. My team built a six-thruster AUV — a more deliberate configuration than the standard eight, where every design decision carried more weight.",
    bullets: [
      "Designed the mechanical framework for a six-thruster AUV, chosen over the standard eight for greater design intentionality",
      "Integrated a Pixhawk flight controller with an NVIDIA Jetson Nano for onboard autonomous control",
      "Debugged control system behavior using QGroundControl, resolving rotation instability in the thruster mapping",
      "Presented at the Lehigh Research Symposium alongside 103 competing projects, placing 2nd in the General Research category",
    ],
    skills: [
      "Python",
      "C++",
      "NVIDIA Jetson Nano",
      "Pixhawk",
      "QGroundControl",
      "Embedded Systems",
      "Mechanical Assembly",
    ],
  },
  {
    title: "NSF I-Corps Northeast",
    org: "Lehigh and Princeton",
    desc: "Customer discovery program on underwater wireless communications — completed 25+ interviews with researchers and industry experts.",
    year: "2025",
    tag: "Entrepreneurship",
    accent: "25+ customer discovery interviews across industry and academia",
    Icon: Compass,
    cover: "/photos/research/nsf-cover.jpg",
    galleryCaptioned: [
      { src: "/photos/research/nsf-poster.jpeg", caption: "Our research poster" },
      {
        src: "/photos/research/nsf-pos.jpeg",
        caption: "Presenting at the NSF I-Corps Northeast showcase",
      },
      {
        src: "/photos/research/nsf-certificate.jpeg",
        caption: "My I-Corps Northeast completion certificate",
      },
    ],
    intro:
      "The NSF I-Corps Northeast program is built around one discipline: get out of the building and talk to the people who would actually use what you are trying to build. Our focus was underwater wireless communication technology for autonomous vehicles.",
    bullets: [
      "Completed 25+ customer discovery interviews across academic research, defense contracting, and offshore energy sectors",
      "Spoke with oceanographers, robotics researchers, submarine communication engineers, and commercial offshore operators",
      "Identified a concrete gap between laboratory-grade acoustic/optical communication capability and deployable field technology",
      "Pinpointed reliability in turbid water conditions as the primary unsolved barrier to commercialization",
      "Developed and iterated pitch materials through Lehigh and Princeton program mentors",
    ],
    skills: [
      "Customer Discovery",
      "Market Research",
      "Lean Startup",
      "Acoustic Communications",
      "Stakeholder Interviews",
      "Pitch Development",
    ],
  },
  {
    title: "IEEE Publication",
    org: "IEEE CYBER 2024, Copenhagen",
    desc: "Published a peer-reviewed paper at the 14th IEEE International Conference on CYBER — IMU-based gait analysis for construction safety.",
    year: "2024",
    tag: "IEEE Publication",
    accent: "Published at 14th IEEE International Conference, Copenhagen",
    Icon: FileText,
    cover: "/photos/research/ieee-cover.png",
    link: "https://ieeexplore.ieee.org/abstract/document/10748719",
    intro:
      "Published peer-reviewed research at the 14th IEEE International Conference on CYBER in Copenhagen. The project used IMU sensors to detect unsafe gait patterns in construction workers — asking whether sensor data alone could flag fatigue before an injury occurred.",
    bullets: [
      "Built a data collection pipeline using wearable IMUs across controlled construction-environment trials",
      "Processed and classified motion data to identify distinguishable gait patterns across different worker states",
      "Co-authored the full IEEE conference paper in collaboration with Dr. Heping Chen's Automation and Robotics Lab",
    ],
    skills: [
      "Python",
      "IMU Sensors",
      "Signal Processing",
      "Data Analysis",
      "Machine Learning",
      "LaTeX",
    ],
  },
];

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: CaptionedPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-100 flex flex-col bg-black/96 pointer-events-auto"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex shrink-0 items-center justify-between px-5 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs text-white/40 tabular-nums">
          {index + 1} / {photos.length}
        </span>
        <div className="flex items-center gap-2">
          <a
            href={photos[index].src}
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
      </div>

      {/* Image + side arrows */}
      <div className="flex flex-1 min-h-0 items-center justify-center gap-3 px-3 pb-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white disabled:opacity-0"
          disabled={photos.length <= 1}
        >
          <ChevronLeft size={20} />
        </button>

        <div
          className="flex flex-1 min-h-0 min-w-0 flex-col items-center justify-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photos[index].src}
            alt=""
            className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
          />
          {photos[index].caption && (
            <p className="text-sm text-white/70 text-center max-w-lg">{photos[index].caption}</p>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white disabled:opacity-0"
          disabled={photos.length <= 1}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function ResearchModal({
  item,
  open,
  onClose,
}: {
  item: Item;
  open: boolean;
  onClose: () => void;
}) {
  const Icon = item.Icon;
  const hasPhotos = item.gallery && item.gallery.length > 0;
  const photos = item.gallery ?? [];
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () =>
    setLightboxIdx((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const nextPhoto = () => setLightboxIdx((i) => (i !== null ? (i + 1) % photos.length : null));

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(v) => {
          if (!v) onClose();
        }}
      >
        <DialogContent
          className="max-w-4xl w-full p-0 overflow-hidden border-border/60 bg-card gap-0 flex flex-col max-h-[90vh] sm:max-h-[86vh]"
          onEscapeKeyDown={(e) => {
            if (lightboxIdx !== null) {
              e.preventDefault();
              closeLightbox();
            }
          }}
        >
          {/* ── Full-width cover ── */}
          {item.cover ? (
            <div className="relative w-full h-48 sm:h-60 shrink-0 overflow-hidden">
              <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-card/90" />
              <div className="absolute top-0 right-0 h-14 w-20 bg-linear-to-bl from-black/55 to-transparent" />
            </div>
          ) : (
            <div className="relative w-full h-28 shrink-0 flex items-center justify-center bg-linear-to-b from-teal/6 to-transparent border-b border-border/40">
              <Icon size={44} strokeWidth={1.25} className="text-foreground/20" />
            </div>
          )}

          {/* ── Body: text left, photos right ── */}
          <div
            className={`flex-1 min-h-0 overflow-y-auto sm:overflow-hidden flex flex-col${hasPhotos ? " sm:flex-row" : ""}`}
          >
            {/* Text content */}
            <div
              className={`${hasPhotos ? "sm:flex-1" : "flex-1"} sm:overflow-y-auto px-6 sm:px-8 py-6 space-y-5`}
            >
              <DialogHeader className="space-y-2">
                <div className="flex items-start justify-between gap-4 pr-6">
                  <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                    {item.title}
                  </DialogTitle>
                  <span className="shrink-0 text-xs tabular-nums text-muted-foreground pt-1">
                    {item.year}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal">
                    {item.tag}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.org}</span>
                </div>
                <p className="text-sm font-medium text-teal leading-snug">{item.accent}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-teal hover:underline underline-offset-2"
                  >
                    {item.linkLabel ?? "View on IEEE Xplore →"}
                  </a>
                )}
              </DialogHeader>

              <div className="h-px bg-border/50" />

              {item.intro && (
                <p className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed">
                  {item.intro}
                </p>
              )}

              {item.bullets && item.bullets.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
                    What I did
                  </p>
                  <ul className="space-y-2.5">
                    {item.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed"
                      >
                        <span className="mt-1.75 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.skills && item.skills.length > 0 && (
                <div className="space-y-2 pb-1">
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
                    Skills & Tools
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="cursor-default rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium text-teal/80 shadow-[0_0_8px_color-mix(in_oklab,var(--teal)_20%,transparent)] transition-all duration-200 hover:border-teal/60 hover:bg-teal/18 hover:text-teal hover:shadow-[0_0_16px_color-mix(in_oklab,var(--teal)_55%,transparent)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Photos panel */}
            {hasPhotos && (
              <>
                <div className="hidden sm:block w-px bg-border/40 shrink-0" />
                <div className="sm:w-[38%] shrink-0 sm:overflow-y-auto p-4 space-y-2.5 border-t border-border/40 sm:border-t-0">
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
                    Photos
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {photos.map((src, idx) => (
                      <button
                        key={src}
                        onClick={() => openLightbox(idx)}
                        className="group relative overflow-hidden rounded-lg border border-border/40 aspect-video bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
                      >
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/35">
                          <Maximize2
                            size={18}
                            className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 drop-shadow-lg"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {lightboxIdx !== null &&
        createPortal(
          <Lightbox
            photos={photos.map((src) => ({ src }))}
            index={lightboxIdx}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />,
          document.body,
        )}
    </>
  );
}

function ResearchStoryModal({ item, onClose }: { item: Item; onClose: () => void }) {
  const galleryPhotos = item.galleryCaptioned ?? [];
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () =>
    setLightboxIdx((i) =>
      i !== null ? (i - 1 + galleryPhotos.length) % galleryPhotos.length : null,
    );
  const nextPhoto = () =>
    setLightboxIdx((i) => (i !== null ? (i + 1) % galleryPhotos.length : null));

  useEffect(() => {
    window.history.pushState({ modal: true }, "");
    const popHandler = () => onClose();
    window.addEventListener("popstate", popHandler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("popstate", popHandler);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIdx === null) window.history.back();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx]);

  return (
    <>
      <div className="fixed inset-0 z-100 bg-background overflow-y-auto">
        {/* Hero cover */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 shrink-0 overflow-hidden">
          {item.cover && (
            <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-black/30" />
          <button
            onClick={() => window.history.back()}
            className="absolute top-5 left-5 sm:left-8 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-sm text-white/80 px-4 py-2 text-sm transition hover:bg-black/60 hover:text-white"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <button
            onClick={() => window.history.back()}
            className="absolute top-5 right-5 sm:right-8 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 transition hover:bg-black/60 hover:text-white"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <div className="container mx-auto">
              <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal mb-3">
                {item.tag}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                {item.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-foreground/70">
                {item.org} · {item.year}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="container mx-auto px-6 py-12 sm:py-16 max-w-5xl space-y-16 sm:space-y-20">
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-sm font-medium text-teal leading-snug">{item.accent}</p>

            {item.intro && (
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {item.intro}
              </p>
            )}

            {item.bullets && item.bullets.length > 0 && (
              <div className="space-y-2.5">
                <p className="text-[11px] tracking-[0.25em] uppercase text-teal font-medium">
                  What I Did
                </p>
                <ul className="space-y-2.5">
                  {item.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm sm:text-[15px] text-foreground/75 leading-relaxed"
                    >
                      <span className="mt-1.75 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.skills && item.skills.length > 0 && (
              <div className="space-y-2.5">
                <p className="text-[11px] tracking-[0.25em] uppercase text-teal font-medium">
                  Skills &amp; Tools
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="cursor-default rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium text-teal/80 shadow-[0_0_8px_color-mix(in_oklab,var(--teal)_20%,transparent)] transition-all duration-200 hover:border-teal/60 hover:bg-teal/18 hover:text-teal hover:shadow-[0_0_16px_color-mix(in_oklab,var(--teal)_55%,transparent)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Closing photo gallery */}
          {galleryPhotos.length > 0 && (
            <div className="space-y-6">
              <div className="space-y-1.5 max-w-3xl mx-auto">
                <p className="text-[11px] tracking-[0.25em] uppercase text-teal font-medium">
                  Gallery
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                  Moments Along the Way
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                {galleryPhotos.map((photo, idx) => (
                  <button
                    key={photo.src}
                    onClick={() => openLightbox(idx)}
                    className="group space-y-2 text-left focus-visible:outline-none"
                  >
                    <div className="relative overflow-hidden rounded-xl border border-border/40 aspect-square bg-surface">
                      <img
                        src={photo.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/35">
                        <Maximize2
                          size={18}
                          className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 drop-shadow-lg"
                        />
                      </div>
                    </div>
                    {photo.caption && (
                      <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                        {photo.caption}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {lightboxIdx !== null &&
        createPortal(
          <Lightbox
            photos={galleryPhotos}
            index={lightboxIdx}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />,
          document.body,
        )}
    </>
  );
}

function Card({ item, onClick }: { item: Item; onClick: () => void }) {
  const Icon = item.Icon;
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      className="group relative overflow-hidden rounded-2xl bg-surface-elevated border border-border/60 cursor-pointer transition-all duration-300 hover:border-teal/60 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--teal)_35%,transparent)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
    >
      {item.cover ? (
        <div className="relative h-44 overflow-hidden">
          <img
            src={item.cover}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface-elevated/80 to-transparent" />
          <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/70">
            <Icon size={14} strokeWidth={1.75} />
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

      <div className="p-6 sm:p-7 pt-5 space-y-4">
        <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal">
          {item.tag}
        </span>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight leading-tight">{item.title}</h3>
          <span className="shrink-0 pt-1 text-xs text-muted-foreground tabular-nums">
            {item.year}
          </span>
        </div>

        <p className="text-sm text-foreground/65 leading-relaxed">{item.desc}</p>

        <div className="flex items-center justify-between pt-1">
          <p className="text-sm font-medium text-teal leading-snug">{item.accent}</p>
          <span className="text-xs text-muted-foreground group-hover:text-teal transition-colors duration-200 shrink-0 ml-3">
            Read more →
          </span>
        </div>
      </div>
    </article>
  );
}

export function Research() {
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const visible = expanded ? items : items.slice(0, 3);

  return (
    <section id="research" className="py-28 sm:py-36 bg-surface/40">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Research</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item) => (
            <Card key={item.title} item={item} onClick={() => setActiveItem(item)} />
          ))}
        </div>

        {items.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground/80 hover:border-teal/50 hover:text-teal transition"
            >
              {expanded ? (
                <>
                  <Minus size={14} /> Show Less
                </>
              ) : (
                <>
                  <Plus size={14} /> View All Research
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {activeItem &&
        (activeItem.galleryCaptioned && activeItem.galleryCaptioned.length > 0 ? (
          <ResearchStoryModal item={activeItem} onClose={() => setActiveItem(null)} />
        ) : (
          <ResearchModal
            item={activeItem}
            open={!!activeItem}
            onClose={() => setActiveItem(null)}
          />
        ))}
    </section>
  );
}
