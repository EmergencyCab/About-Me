const tech = ["HPC", "C/C++", "Python", "Linux/HPC Systems", "NVIDIA Jetson", "IMU Sensors", "Full-Stack", "Git"];
const other = ["Research", "Product Management", "Public Policy", "Writing", "Community Building"];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-foreground/80 hover:border-teal/40 hover:text-teal transition">
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-6">SKILLS</h2>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">{tech.map((t) => <Chip key={t} label={t} />)}</div>
          <div className="flex flex-wrap gap-2">{other.map((t) => <Chip key={t} label={t} />)}</div>
        </div>
      </div>
    </section>
  );
}
