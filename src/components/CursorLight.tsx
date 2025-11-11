import { useState, useEffect } from "react";

export default function CursorLight() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full"
      style={{
        background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.05), transparent 70%)`,
        transition: "background 0.1s ease-out",
      }}
    />
  );
}
