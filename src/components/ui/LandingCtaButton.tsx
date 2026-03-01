"use client";

import { useFormModal } from "@/components/ui/FormModal";

interface LandingCtaButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function LandingCtaButton({ children, className = "" }: LandingCtaButtonProps) {
  const { openFormModal } = useFormModal();

  return (
    <button
      onClick={() => openFormModal()}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
