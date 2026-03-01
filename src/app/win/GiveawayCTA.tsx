"use client";

export default function GiveawayCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href="#enter"
      className={`group block cursor-pointer rounded-lg bg-brand-red px-6 py-7 text-center shadow-lg shadow-brand-red/25 transition-all hover:shadow-xl hover:shadow-brand-red/30 hover:brightness-110 ${className}`}
    >
      <h3 className="font-heading text-2xl font-bold uppercase text-white sm:text-3xl">
        Enter the Giveaway
      </h3>
    </a>
  );
}
