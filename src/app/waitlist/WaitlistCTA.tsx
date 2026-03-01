"use client";

import { useFormModal } from "@/components/ui/FormModal";

export default function WaitlistCTA({ className = "" }: { className?: string }) {
  const { openFormModal } = useFormModal();

  return (
    <button
      onClick={() => openFormModal()}
      className={`group block cursor-pointer rounded-lg bg-brand-red px-8 py-5 text-center shadow-lg shadow-brand-red/25 transition-all hover:shadow-xl hover:shadow-brand-red/30 hover:brightness-110 ${className}`}
    >
      <h3 className="font-heading text-xl font-semibold uppercase text-white sm:text-2xl">
        Join the Waitlist Now!
      </h3>
      <span className="mt-1 block text-sm text-white/90">
        South Portland / Cape Elizabeth &mdash; No commitment required
      </span>
    </button>
  );
}
