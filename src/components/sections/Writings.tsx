import { ArrowRight } from "lucide-react";

const posts = [
  { title: "My First Year in America", desc: "Personal essay.", tag: "Essay" },
  { title: "Why I Created a Seat That Didn't Exist", desc: "Student Government.", tag: "Essay" },
  { title: "What HPC Taught Me About Access", desc: "On equity and computing.", tag: "Research" },
  { title: "A Rock I Found Near the River", desc: "Unknown. That's the point.", tag: "Personal" },
];

export function Writings() {
  return (
    <section id="writing" className="py-28 sm:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Writing</h2>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">Essays</span>
        </div>

        {/* Pull quote — breaks the grid */}
        <blockquote className="mb-14 max-w-3xl">
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground/90">
            <span className="text-teal">"</span>The hardest part of arriving somewhere new is not the
            cold, the food, or the language. It is finding the version of yourself
            that survives the move.<span className="text-teal">"</span>
          </p>
          <footer className="mt-3 text-xs text-muted-foreground tracking-wide">
            — from <span className="text-foreground/80">My First Year in America</span>
          </footer>
        </blockquote>

        <div className="grid md:grid-cols-2 gap-5">
          {posts.map((p) => (
            <article key={p.title} className="card-hover rounded-2xl border border-border bg-card p-6 sm:p-7">
              <div className="text-[10px] tracking-[0.25em] text-teal mb-3">{p.tag.toUpperCase()}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-foreground/70 mb-5">{p.desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-teal transition">
                Read <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <a href="#dispatches" className="mt-14 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-teal transition">
          Shorter thoughts <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
