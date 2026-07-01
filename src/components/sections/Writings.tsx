import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const posts = [
  {
    title: "To a Beautiful Courtesan",
    desc: "A translation and close reading of Laxmi Prasad Devkota's 1940s Nepali poem — on finding the divine in a marginalized woman, and what that indicts about hypocrisy, commodification, and who we call sacred.",
    tag: "Translation",
    url: "https://emergencycab.github.io/To-a-Beautiful-Courtesan/",
    cover: "/photos/devkota.png",
  },
  {
    title: "The Interview",
    desc: "An honest reckoning with why I conduct exhaustive interviews of people before letting them in — and what it costs to watch your own life from the press box.",
    tag: "Essay",
    url: "https://emergencycab.github.io/the-interview/",
    cover: "/photos/interview.webp",
  },
  {
    title: "Raise the Jolly Roger",
    desc: "My take on how One Piece and anime shaped the way I saw the protests that toppled Nepal's government — and why a pirate flag meant something real.",
    tag: "Article",
    url: "https://emergencycab.github.io/Raise-the-Jolly-Roger/",
    cover: "/photos/Jolly_Cover.jpg",
  },
  {
    title: "A Kingdom of One",
    desc: "A memoir.",
    tag: "Memoir",
    url: "https://emergencycab.github.io/a_kingdom_of_one/",
    cover: "/photos/Kingdom_Cover.jpg",
  },
  {
    title: "Two Pieces About One Week",
    desc: "A reflection on a week spent teaching at a math camp, the middle schoolers I worked with, and the small things that stayed with me.",
    tag: "Reflection",
    url: "https://emergencycab.github.io/math-camp/index.html",
    cover: "/photos/Mathworks_Cover.jpg",
  },
  {
    title: "SC25 — My First Supercomputing Conference",
    desc: "Notes from the show floor, the talks, the people.",
    tag: "Field Note",
    url: null,
    cover: null,
  },
];

export function Writings() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? posts : posts.slice(0, 2);

  return (
    <section id="writing" className="py-28 sm:py-36">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-12">
          Writing.
        </h2>

        <blockquote className="mb-14 max-w-3xl mx-auto text-center">
          <div className="text-7xl sm:text-8xl font-serif leading-none mb-3 select-none text-teal/20">"</div>
          <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-[1.2]">
            <span className="text-teal">Musubi</span> is the old way of calling the local guardian god. This word has profound meaning. Typing thread is <span className="text-teal">Musubi</span>. Connecting people is <span className="text-teal">Musubi</span>. The flow of time is <span className="text-teal">Musubi</span>.{" "}
            <span className="text-foreground/50">
              These are all the god's power. So the braided cords that we make are the god's art and represent the flow of time itself. They converge and take shape. They twist, tangle, sometimes unravel, break, and then connect again. <span className="text-teal">Musubi</span> — knotting. That's time.
            </span>
          </p>
          <footer className="mt-6 text-sm text-muted-foreground">
            — <span className="text-foreground/80 font-semibold text-base">Makoto Shinkai</span>, <span className="italic">Your Name</span>
          </footer>
        </blockquote>

        <div className="grid md:grid-cols-2 gap-5">
          {visible.map((p) =>
            p.url && p.cover ? (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover rounded-2xl border border-border overflow-hidden relative min-h-70 flex flex-col justify-end"
                style={{ backgroundImage: `url(${p.cover})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 p-6 sm:p-7">
                  <div className="inline-block text-[10px] tracking-[0.25em] text-teal bg-black/50 border border-teal/30 rounded-full px-3 py-1 mb-3">{p.tag.toUpperCase()}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
                  <p className="text-sm text-white/70">{p.desc}</p>
                </div>
              </a>
            ) : p.url ? (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover rounded-2xl border border-border bg-card p-6 sm:p-7 block"
              >
                <div className="text-[10px] tracking-[0.25em] text-teal mb-3">{p.tag.toUpperCase()}</div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/70">{p.desc}</p>
              </a>
            ) : (
              <article key={p.title} className="rounded-2xl border border-border bg-card p-6 sm:p-7 opacity-50">
                <div className="text-[10px] tracking-[0.25em] text-teal mb-3">{p.tag.toUpperCase()}</div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/70 mb-5">{p.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-foreground/30 cursor-not-allowed">
                  Coming soon
                </span>
              </article>
            )
          )}
        </div>

        {posts.length > 2 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80 hover:border-teal/50 hover:text-teal transition"
            >
              {expanded ? <><Minus size={14} /> Show Less</> : <><Plus size={14} /> See More Writing</>}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
