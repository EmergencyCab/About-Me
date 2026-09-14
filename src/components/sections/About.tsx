export function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          {/* ── Photo column ── */}
          <div className="space-y-4">
            <div className="relative aspect-4/5 w-full rounded-2xl bg-card border border-border overflow-hidden">
              <img
                src="/photos/My_Photo.jpg"
                alt="Prashant Panta"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/30" />
            </div>

            <p className="text-center text-[11px] text-muted-foreground tracking-wide">
              Texas State University · Public Address
            </p>

            <div className="rounded-xl border border-border/60 bg-surface/40 p-5 font-mono text-[11px] leading-relaxed text-muted-foreground">
              <div className="flex justify-between gap-4">
                <span className="text-foreground/80">KTM</span>
                <span>27.7172° N · 85.3240° E</span>
              </div>
              <div className="my-1.5 flex items-center gap-2">
                <span className="h-px flex-1 bg-border" />
                <span className="text-teal">11h 45m</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-foreground/80">SMX</span>
                <span>29.8833° N · 97.9414° W</span>
              </div>
            </div>
          </div>

          {/* ── Text column ── */}
          <div className="flex flex-col gap-8">
            {/* Intro */}
            <p className="text-[18px] text-foreground/85 leading-relaxed">
              I am a rising senior at Texas State University studying Computer Science with a minor
              in Applied Mathematics. My work sits at the intersection of high performance computing
              infrastructure and research accessibility.
            </p>

            <div className="h-px bg-border/40" />

            {/* Current Research */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                Current Research
              </p>
              <div className="space-y-1.5">
                <p className="text-[18px] font-semibold text-foreground leading-snug">
                  Undergraduate Researcher — Computing Research Lab (CRL)
                </p>
                <p className="text-[18px] text-muted-foreground">
                  Texas State University · with Dr. Apan Qasem
                </p>
                <p className="text-[18px] text-foreground/75 leading-relaxed">
                  Reproducing and extending research on using large language models to predict GPU
                  performance bottlenecks, including dataset reconstruction, parallel code analysis,
                  and hardware profiling for compute- versus memory-bound classification.
                </p>
              </div>
            </div>

            <div className="h-px bg-border/40" />

            {/* Previous */}
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                Previously
              </p>

              <div className="space-y-1.5">
                <p className="text-[18px] font-semibold text-foreground leading-snug">
                  Undergraduate HPC Intern
                </p>
                <p className="text-[18px] text-muted-foreground">
                  Division of IT, Texas State University · with{" "}
                  <a
                    href="https://faculty.txst.edu/profile/2019201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:underline underline-offset-2"
                  >
                    Dr. Damian Valles
                  </a>
                </p>
                <p className="text-[18px] text-foreground/75 leading-relaxed">
                  Benchmarked the LEAP2 cluster and established performance baselines as Texas State
                  prepared for R1 research classification.{" "}
                  <span className="text-teal font-medium">Published at IEEE UEMCON 2026.</span>
                </p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[18px] font-semibold text-foreground leading-snug">
                  NSF Research Translation Accelerator Intern
                </p>
                <p className="text-[18px] text-muted-foreground">Lehigh University · 2025</p>
                <p className="text-[18px] text-foreground/75 leading-relaxed">
                  Built an autonomous underwater vehicle — 6-thruster AUV on NVIDIA Jetson Nano.{" "}
                  <span className="text-teal font-medium">Ranked 2nd of 103 projects</span> at the
                  Lehigh Summer Research Symposium.
                </p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[18px] font-semibold text-foreground leading-snug">
                  Automation & Robotics Lab
                </p>
                <p className="text-[18px] text-muted-foreground">
                  Texas State University · Dr. Heping Chen
                </p>
                <p className="text-[18px] text-foreground/75 leading-relaxed">
                  IMU-based gait analysis for construction safety.{" "}
                  <span className="text-teal font-medium">
                    Published at IEEE CYBER 2024, Copenhagen.
                  </span>
                </p>
              </div>
            </div>

            {/* Research interests pushed to bottom */}
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                Research Interests
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "HPC Infrastructure",
                  "Systems Performance",
                  "Parallel Computing",
                  "Research Accessibility",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-teal/25 bg-teal/10 px-3 py-0.5 text-[17px] font-medium text-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
