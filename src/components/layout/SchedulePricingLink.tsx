"use client";

import { useFormModal } from "@/components/ui/FormModal";

interface SchedulePricingLinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function SchedulePricingLink({ className, children }: SchedulePricingLinkProps) {
  const { openFormModal } = useFormModal();

  return (
    <button
      onClick={openFormModal}
      className={`cursor-pointer border-none bg-transparent p-0 text-left ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
