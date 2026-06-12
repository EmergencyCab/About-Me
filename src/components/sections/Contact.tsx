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


        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:prashantpanta777@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-teal-foreground hover:opacity-90 transition teal-glow"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-panta-ba4614246/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground/50 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/EmergencyCab?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground/50 transition"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>

        <div className="mt-12 text-xs text-muted-foreground tracking-wide">
          San Marcos, Texas <span className="mx-2 text-teal">·</span> Kathmandu, Nepal
        </div>


        <footer className="mt-20 pt-8 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} Prashant Panta
        </footer>
      </div>
    </section>
  );
}
