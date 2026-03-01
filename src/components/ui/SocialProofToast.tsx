"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const names = [
  "Sarah", "Mike", "Linda", "Tom", "Karen", "Dave", "Janet", "Bob",
  "Nancy", "Jim", "Diane", "Steve", "Pam", "Rick", "Susan", "Gary",
  "Donna", "Bill", "Brenda", "Scott", "Lisa", "Mark", "Joanne", "Dan",
  "Carol", "Jeff", "Mary", "Paul", "Theresa", "Doug", "Kathy", "Brian",
];

const towns = [
  "Kennebunk", "Scarborough", "South Portland", "Cape Elizabeth",
  "Biddeford", "Saco", "Wells", "Old Orchard Beach", "Gorham",
  "Westbrook", "Portland", "Arundel",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomMinutes() {
  return Math.floor(Math.random() * 19) + 1;
}

let nextId = 0;

function generateEntry() {
  return {
    id: nextId++,
    name: pickRandom(names),
    town: pickRandom(towns),
    minutes: randomMinutes(),
  };
}

type Entry = ReturnType<typeof generateEntry>;

type Toast = Entry & { fading: boolean };

export default function SocialProofToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const fadeTimers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());
  const removeTimers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const removeToast = useCallback((id: number) => {
    // Start fade out
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, fading: true } : t)));
    // Remove from DOM after transition
    const rm = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      fadeTimers.current.delete(id);
      removeTimers.current.delete(id);
    }, 500);
    removeTimers.current.set(id, rm);
  }, []);

  const addToast = useCallback(() => {
    const entry = { ...generateEntry(), fading: false };
    setToasts((prev) => {
      const next = [...prev, entry];
      // Keep max 3 — force remove oldest
      if (next.length > 3) {
        const oldest = next[0];
        fadeTimers.current.get(oldest.id) && clearTimeout(fadeTimers.current.get(oldest.id)!);
        removeTimers.current.get(oldest.id) && clearTimeout(removeTimers.current.get(oldest.id)!);
        fadeTimers.current.delete(oldest.id);
        removeTimers.current.delete(oldest.id);
        return next.slice(1);
      }
      return next;
    });
    // Auto-fade after 15 seconds
    const ft = setTimeout(() => removeToast(entry.id), 15000);
    fadeTimers.current.set(entry.id, ft);
  }, [removeToast]);

  const dismissToast = useCallback((id: number) => {
    fadeTimers.current.get(id) && clearTimeout(fadeTimers.current.get(id)!);
    removeTimers.current.get(id) && clearTimeout(removeTimers.current.get(id)!);
    removeToast(id);
  }, [removeToast]);

  // Stagger initial 3 toasts
  useEffect(() => {
    const t1 = setTimeout(() => addToast(), 5000);
    const t2 = setTimeout(() => addToast(), 8000);
    const t3 = setTimeout(() => addToast(), 11000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [addToast]);

  // Keep cycling — add a new toast every 8-14 seconds
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const delay = 8000 + Math.random() * 6000;
      timeout = setTimeout(() => {
        addToast();
        schedule();
      }, delay);
    };
    const start = setTimeout(() => schedule(), 13000);
    return () => { clearTimeout(start); clearTimeout(timeout); };
  }, [addToast]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      fadeTimers.current.forEach(clearTimeout);
      removeTimers.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col-reverse gap-2">
      {toasts.map((entry) => (
        <div
          key={entry.id}
          className={`flex max-w-xs items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-xl transition-all duration-500 ${
            entry.fading
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
          style={{ animation: entry.fading ? undefined : "toastSlideIn 0.5s ease-out" }}
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
            <p className="flex items-center gap-1 text-xs text-brand-gray-light">
              just entered {entry.minutes} min ago
              <span className="inline-flex items-center gap-0.5 text-green-600">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified
              </span>
            </p>
          </div>
          <button
            onClick={() => dismissToast(entry.id)}
            className="ml-auto shrink-0 cursor-pointer text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
