"use client";

import { useState, useEffect } from "react";

const entries = [
  { name: "Sarah", town: "Kennebunk" },
  { name: "Mike", town: "Scarborough" },
  { name: "Linda", town: "South Portland" },
  { name: "Tom", town: "Kennebunk" },
  { name: "Karen", town: "Scarborough" },
  { name: "Dave", town: "South Portland" },
  { name: "Janet", town: "Kennebunk" },
  { name: "Bob", town: "Scarborough" },
];

function randomMinutes() {
  return Math.floor(Math.random() * 12) + 2;
}

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [minutes, setMinutes] = useState(randomMinutes());

  useEffect(() => {
    // Initial delay before first toast
    const initialDelay = setTimeout(() => {
      setVisible(true);
    }, 6000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Auto-hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    // Show next toast after hiding
    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % entries.length);
      setMinutes(randomMinutes());
      setVisible(true);
    }, 12000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [visible, index]);

  const entry = entries[index];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 flex max-w-xs items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-xl transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-brand-dark">
          {entry.name} from {entry.town}
        </p>
        <p className="text-xs text-brand-gray-light">
          just entered {minutes} min ago
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-auto shrink-0 cursor-pointer text-gray-400 hover:text-gray-600"
        aria-label="Dismiss"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
        </svg>
      </button>
    </div>
  );
}
