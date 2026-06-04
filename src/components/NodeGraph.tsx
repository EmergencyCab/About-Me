import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; label: string; r: number };

const LABELS = ["HPC", "Research", "Writing", "Building"];

export function NodeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Center positions in a soft diamond
    const nodes: Node[] = LABELS.map((label, i) => {
      const angle = (i / LABELS.length) * Math.PI * 2 - Math.PI / 2;
      return {
        x: w / 2 + Math.cos(angle) * Math.min(w, h) * 0.28,
        y: h / 2 + Math.sin(angle) * Math.min(w, h) * 0.28,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        label,
        r: 6,
      };
    });

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const teal = "rgba(0, 201, 167, 1)";
    const tealFaint = "rgba(0, 201, 167, 0.18)";
    const tealMid = "rgba(0, 201, 167, 0.45)";

    let t = 0;
    const tick = () => {
      t += 0.012;
      ctx.clearRect(0, 0, w, h);

      // Update positions — slow drift, gentle pull to original orbit
      nodes.forEach((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2 + Math.sin(t * 0.5) * 0.05;
        const tx = w / 2 + Math.cos(angle) * Math.min(w, h) * 0.28;
        const ty = h / 2 + Math.sin(angle) * Math.min(w, h) * 0.28;
        n.x += (tx - n.x) * 0.02 + n.vx;
        n.y += (ty - n.y) * 0.02 + n.vy;
        n.vx *= 0.96;
        n.vy *= 0.96;

        // Mouse repulsion (subtle)
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          const f = (14000 - d2) / 14000;
          n.vx += (dx / Math.sqrt(d2 + 1)) * f * 0.4;
          n.vy += (dy / Math.sqrt(d2 + 1)) * f * 0.4;
        }
      });

      // Draw edges (every pair) with breathing alpha
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const breathe = 0.35 + 0.25 * Math.sin(t + (i + j));
          ctx.strokeStyle = `rgba(0, 201, 167, ${breathe * 0.6})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 6, 0, Math.PI * 2);
        ctx.fillStyle = tealFaint;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = teal;
        ctx.fill();

        ctx.font = "500 13px Inter, system-ui, sans-serif";
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.label, n.x, n.y - 18);
      });

      // Outer faint ring
      ctx.strokeStyle = tealMid;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, Math.min(w, h) * 0.42, 0, Math.PI * 2);
      ctx.stroke();

      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[520px] opacity-80">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
