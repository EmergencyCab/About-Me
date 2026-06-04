import { ArrowRight, ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { NodeGraph } from "../NodeGraph";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      {/* Vertical section counter */}
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.3em] text-muted-foreground">
        <span className="text-foreground">01</span>
        <span className="h-12 w-px bg-border" />
        <span>05</span>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="space-y-7 animate-fade-in-up">
          <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
            HPC Researcher · Writer · Builder
          </span>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.04em] leading-[0.92] text-foreground">
            I am Prashant<span className="text-teal">.</span>
          </h1>

          <p className="text-lg sm:text-xl text-teal font-medium max-w-xl leading-relaxed">
            HPC researcher, longform writer, and builder of things
            that did not exist before I arrived.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-teal-foreground hover:opacity-90 transition teal-glow"
            >
              Explore My Work <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/50 transition"
            >
              Learn More <ArrowDown size={16} />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4 text-foreground/50">
            <a href="https://github.com" aria-label="GitHub" className="hover:text-teal transition"><Github size={18} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-teal transition"><Linkedin size={18} /></a>
            <a href="mailto:hello@prashant.dev" aria-label="Email" className="hover:text-teal transition"><Mail size={18} /></a>
            <a href="/resume.pdf" aria-label="Resume" className="hover:text-teal transition"><FileText size={18} /></a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--teal)_15%,transparent)_0%,transparent_60%)]" />
          <NodeGraph />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <div className="h-9 w-5 rounded-full border border-current flex items-start justify-center p-1">
          <span className="h-1.5 w-1 rounded-full bg-current animate-scroll-hint" />
        </div>
      </a>
    </section>
  );
}
