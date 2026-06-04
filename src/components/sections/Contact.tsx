import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 sm:py-40">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
          Building something interesting?
          <br />
          <span className="text-foreground/60">
            Thinking about research, fellowships, or just want to talk about rocks?
          </span>
        </h2>

        <p className="mt-8 text-base text-foreground/70">
          Send a note. I answer most of them.
        </p>

        <blockquote className="mt-10 text-teal text-sm italic">
          "I want to be someone who can laugh about today tomorrow."
        </blockquote>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@prashant.dev"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-teal-foreground hover:opacity-90 transition teal-glow"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground/50 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="mt-12 text-xs text-muted-foreground tracking-wide">
          San Marcos, Texas <span className="mx-2 text-teal">·</span> Kathmandu, Nepal
        </div>

        <form className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="rss" className="opacity-70">Get Dispatches by email</label>
          <input
            id="rss"
            type="email"
            placeholder="you@somewhere.com"
            className="rounded-full border border-border bg-transparent px-3 py-1.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-teal/60"
          />
          <button type="submit" className="rounded-full border border-border px-3 py-1.5 hover:border-teal/60 hover:text-teal transition">
            Subscribe
          </button>
        </form>

        <footer className="mt-20 pt-8 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} Prashant Panta
        </footer>
      </div>
    </section>
  );
}
