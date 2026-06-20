"use client";
import { useState, useEffect } from "react";

const LAUNCH_DATE = new Date();
LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 20);

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setMounted(true);
    function calc() {
      const dist = LAUNCH_DATE.getTime() - Date.now();
      if (dist <= 0) return { d: 0, h: 0, m: 0, s: 0 };
      return {
        d: Math.floor(dist / 86400000),
        h: Math.floor((dist % 86400000) / 3600000),
        m: Math.floor((dist % 3600000) / 60000),
        s: Math.floor((dist % 60000) / 1000),
      };
    }
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  
  const units = [
    { v: t.d, l: "Days" },
    { v: t.h, l: "Hrs" },
    { v: t.m, l: "Min" },
    { v: t.s, l: "Sec" },
  ];

  return (
    <div className="flex gap-[2px]">
      {units.map(({ v, l }) => (
        <div
          key={l}
          className="w-[68px] text-center py-3 bg-cream-deep border border-[rgba(74,44,26,0.1)]"
        >
          <span className="font-display text-[1.75rem] text-espresso block tabular-nums">
            {mounted ? String(v).padStart(2, "0") : "--"}
          </span>
          <span className="font-mono text-[0.5rem] font-semibold text-olive tracking-[0.15em] uppercase mt-0.5 block">
            {l}
          </span>
        </div>
      ))}
    </div>
  );
}
