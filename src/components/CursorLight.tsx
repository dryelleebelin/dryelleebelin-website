import { useEffect, useRef } from "react";

export default function CursorLight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    let rafId = 0;
    let nextX = 0;
    let nextY = 0;
    let scheduled = false;

    function handleMouseMove(e: MouseEvent) {
      nextX = e.clientX;
      nextY = e.clientY;
      if (scheduled) return;
      scheduled = true;
      rafId = window.requestAnimationFrame(() => {
        if (el) {
          el.style.setProperty("--x", `${nextX}px`);
          el.style.setProperty("--y", `${nextY}px`);
        }
        scheduled = false;
      });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background:
          "radial-gradient(circle 500px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.04), transparent 80%)",
      }}
    />
  );
}
