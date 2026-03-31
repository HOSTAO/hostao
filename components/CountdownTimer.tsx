"use client";
import { useState, useEffect } from "react";

// Counts down to a fixed date 28 days from first visit (stored in localStorage)
function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + 28 * 24 * 60 * 60 * 1000;
  const stored = localStorage.getItem("hostao_deal_deadline");
  if (stored) return parseInt(stored);
  const deadline = Date.now() + 28 * 24 * 60 * 60 * 1000;
  localStorage.setItem("hostao_deal_deadline", String(deadline));
  return deadline;
}

interface Props { className?: string; label?: string; }

export default function CountdownTimer({ className = "text-white font-bold", label }: Props) {
  const [parts, setParts] = useState({ d: 28, h: 22, m: 29, s: 59 });

  useEffect(() => {
    const deadline = getDeadline();
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setParts({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className}>
      {label && <span className="mr-1">{label}</span>}
      <span className="font-mono">
        {String(parts.d).padStart(2,"0")}d{" "}
        {String(parts.h).padStart(2,"0")}h{" "}
        {String(parts.m).padStart(2,"0")}m{" "}
        {String(parts.s).padStart(2,"0")}s
      </span>
    </span>
  );
}
