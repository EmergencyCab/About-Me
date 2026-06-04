import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", to: "/", hash: "" },
  { label: "About", to: "/", hash: "about" },
  { label: "Research", to: "/", hash: "research" },
  { label: "Projects", to: "/", hash: "projects" },
  { label: "Writing", to: "/", hash: "writing" },
  { label: "Dispatches", to: "/", hash: "dispatches" },
  { label: "Now", to: "/now", hash: "" },
  { label: "Contact", to: "/", hash: "contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.filter((l) => l.hash).map((l) => l.hash);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (l: (typeof links)[number]) => {
    if (l.to === "/now") return path === "/now";
    if (path !== "/") return false;
    if (l.hash === "") return active === "" && !scrolled;
    return active === l.hash;
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-1 rounded-full border border-border/60 bg-background/60 px-2 py-2 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "py-1.5 shadow-lg shadow-black/20" : ""
        }`}
      >
        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => {
            const a = isActive(l);
            return (
              <li key={l.label} className="relative">
                <Link
                  to={l.to}
                  hash={l.hash || undefined}
                  className={`relative inline-flex items-center px-3.5 py-1.5 text-sm rounded-full transition ${
                    a ? "text-foreground" : "text-foreground/65 hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {a && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-1 rounded-full bg-teal" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="mx-1 h-5 w-px bg-border" />
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-full bg-teal px-3.5 py-1.5 text-sm font-medium text-teal-foreground hover:opacity-90 transition"
        >
          <Download size={14} /> Resume
        </a>
        <ThemeToggle />
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden pointer-events-auto absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-md rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-2">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash || undefined}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
