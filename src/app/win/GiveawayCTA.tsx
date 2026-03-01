"use client";

export default function GiveawayCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href="#enter"
      className={`group block cursor-pointer rounded-lg bg-brand-red px-8 py-5 text-center shadow-lg shadow-brand-red/25 transition-all hover:shadow-xl hover:shadow-brand-red/30 hover:brightness-110 ${className}`}
    >
      <h3 className="font-heading text-xl font-semibold uppercase text-white sm:text-2xl">
        Enter the Giveaway
      </h3>
      <span className="mt-1 block text-sm text-white/90">
        2 winners drawn March 27th &mdash; $1,200 value each
      </span>
    </a>
  );
}
