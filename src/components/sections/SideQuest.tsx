import { Gamepad2 } from "lucide-react";

export function SideQuest() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex items-start gap-4">
          <Gamepad2 size={18} className="text-teal mt-1 shrink-0" />
          <p className="text-base text-foreground/70 leading-relaxed">
            When I'm not in a research lab or a cabinet meeting, I'm probably
            somewhere in Clash Royale arenas.{" "}
            <span className="text-foreground/90">[Current trophy count: 7,200]</span>{" "}
            Occasional thoughts on why this game is more strategic than it looks.
          </p>
        </div>
      </div>
    </section>
  );
}
