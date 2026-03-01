"use client";

import { useState, useEffect } from "react";

const DRAW_DATE = new Date("2026-03-27T12:00:00-04:00");

function getTimeLeft() {
  const diff = DRAW_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-heading text-3xl font-bold text-white sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/60">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const ended =
    time.days === 0 &&
    time.hours === 0 &&
    time.minutes === 0 &&
    time.seconds === 0;

  if (ended) return null;

  return (
    <div className="inline-flex items-center gap-4 rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm sm:gap-6">
      <Digit value={time.days} label="Days" />
      <span className="text-2xl font-bold text-white/40">:</span>
      <Digit value={time.hours} label="Hours" />
      <span className="text-2xl font-bold text-white/40">:</span>
      <Digit value={time.minutes} label="Min" />
      <span className="text-2xl font-bold text-white/40">:</span>
      <Digit value={time.seconds} label="Sec" />
    </div>
  );
}
