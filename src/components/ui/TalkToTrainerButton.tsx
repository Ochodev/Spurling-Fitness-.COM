"use client";

import { usePostHog } from "posthog-js/react";
import Button from "@/components/ui/Button";
import { useFormModal } from "@/components/ui/FormModal";

interface TalkToTrainerButtonProps {
  variant?: "filled" | "outlined";
  size?: "default" | "large";
  className?: string;
}

export default function TalkToTrainerButton({
  variant = "filled",
  size = "large",
  className,
}: TalkToTrainerButtonProps) {
  const { openFormModal } = useFormModal();
  const posthog = usePostHog();

  const handleClick = () => {
    posthog.capture("cta_clicked", {
      cta: "talk_to_trainer",
      page_url: window.location.pathname,
    });
    openFormModal();
  };

  return (
    <Button onClick={handleClick} variant={variant} size={size} className={className}>
      TALK TO A TRAINER!
    </Button>
  );
}
