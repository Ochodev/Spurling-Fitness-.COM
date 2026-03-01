"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: string; // ISO date string
  daysFromNow?: number; // always show this many days from page load
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: number): TimeLeft {
  const difference = target - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer({
  targetDate,
  daysFromNow,
  className = "",
}: CountdownTimerProps) {
  const [target] = useState(() => {
    if (daysFromNow !== undefined) {
      return Date.now() + daysFromNow * 24 * 60 * 60 * 1000;
    }
    return new Date(targetDate ?? "").getTime();
  });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-4 ${className}`}>
      {blocks.map((block) => (
        <div key={block.label} className="text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-dark text-2xl font-bold text-white font-heading sm:h-20 sm:w-20 sm:text-3xl">
            {String(block.value).padStart(2, "0")}
          </div>
          <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-brand-gray-light">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
