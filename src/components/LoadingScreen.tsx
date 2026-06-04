import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    // Show the brand moment for ~1.8s, then fade out
    const out = setTimeout(() => setPhase("out"), 1400);
    const done = setTimeout(() => setPhase("done"), 1900);
    return () => {
      clearTimeout(out);
      clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        opacity: phase === "out" ? 0 : 1,
        pointerEvents: phase === "out" ? "none" : "auto",
        background:
          "radial-gradient(ellipse at center, #3a7a76 0%, #2d5f5b 55%, #1f4a47 100%)",
      }}
    >
      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Big faint wordmark */}
        <h1
          className="select-none font-display font-bold tracking-[-0.04em] leading-none"
          style={{
            fontSize: "clamp(4rem, 16vw, 13rem)",
            color: "rgba(255,255,255,0.08)",
            textShadow: "0 2px 30px rgba(0,0,0,0.15)",
          }}
        >
          PRASHANT
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 max-w-2xl text-balance text-base sm:text-xl md:text-2xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          HPC researcher, longform writer, and builder
          <br className="hidden sm:block" />
          of things that did not exist before I arrived.
        </p>
      </div>
    </div>
  );
}
