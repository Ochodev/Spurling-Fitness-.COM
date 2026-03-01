"use client";

import { usePostHog } from "posthog-js/react";
import { useFormModal, SCHEDULE_PRICING_HEADER } from "@/components/ui/FormModal";

interface SchedulePricingLinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function SchedulePricingLink({ className, children }: SchedulePricingLinkProps) {
  const { openFormModal } = useFormModal();
  const posthog = usePostHog();

  const handleClick = () => {
    posthog.capture("cta_clicked", {
      cta: "schedule_pricing",
      page_url: window.location.pathname,
    });
    openFormModal(SCHEDULE_PRICING_HEADER);
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer border-none bg-transparent p-0 text-left ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
