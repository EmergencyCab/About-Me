const left = [
  {
    title: "PROGRAMMING",
    items: ["Python", "C++", "JavaScript", "SQL", "LaTeX"],
  },
  {
    title: "MACHINE LEARNING & DATA SCIENCE",
    items: ["TensorFlow", "PyTorch", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "ROBOTICS & AUTONOMOUS SYSTEMS",
    items: ["ROS2", "MAVLink", "ArduPilot", "Gazebo", "RViz", "QGroundControl", "Linux"],
  },
  {
    title: "HIGH-PERFORMANCE COMPUTING",
    items: ["SLURM Job Scheduling", "Parallel Processing", "Cluster Computing"],
  },
];

const right = [
  {
    title: "DEVELOPMENT TOOLS",
    items: ["Git", "GitHub", "Bitbucket", "MATLAB", "Jira"],
  },
  {
    title: "RESEARCH",
    items: ["Customer Discovery", "Technical Writing", "Data Analysis", "Documentation"],
  },
  {
    title: "LEADERSHIP & MANAGEMENT",
    items: ["Leadership", "Project Management", "Program Design", "Public Policy", "Community Building", "Stakeholder Engagement", "Strategic Planning", "Mentorship"],
  },
];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground/80 hover:border-teal/40 hover:text-teal transition cursor-default">
      {label}
    </span>
  );
}

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-foreground/50 shrink-0">{title}</span>
        <div className="flex-1 h-px bg-border/60" />
      </div>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => <Chip key={item} label={item} />)}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-36 bg-surface/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-12">Skills</h2>
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
          <div className="space-y-10">
            {left.map((g) => <Group key={g.title} {...g} />)}
          </div>
          <div className="space-y-10">
            {right.map((g) => <Group key={g.title} {...g} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
