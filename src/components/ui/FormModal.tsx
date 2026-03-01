"use client";

import { createContext, useContext, useState, useCallback, useEffect, useRef, ReactNode } from "react";
import { usePostHog } from "posthog-js/react";
import ContactForm from "@/components/forms/ContactForm";

interface FormModalContextValue {
  openFormModal: (headerText?: string) => void;
}

const FormModalContext = createContext<FormModalContextValue>({
  openFormModal: () => {},
});

const DEFAULT_HEADER = "We\u2019re here to answer any questions you have and help you get started on your fitness journey.";
export const SCHEDULE_PRICING_HEADER = "Fill out the form below and we will send you information on scheduling and pricing.";

export function useFormModal() {
  return useContext(FormModalContext);
}

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [headerText, setHeaderText] = useState(DEFAULT_HEADER);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const posthog = usePostHog();

  const openFormModal = useCallback((text?: string | unknown) => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    const header = typeof text === "string" ? text : DEFAULT_HEADER;
    setHeaderText(header);
    setIsOpen(true);
    posthog.capture("form_modal_opened", {
      header: header === SCHEDULE_PRICING_HEADER ? "schedule_pricing" : "default",
      page_url: window.location.pathname,
    });
  }, [posthog]);

  const closeFormModal = useCallback(() => {
    setIsOpen(false);
    previousFocusRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFormModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeFormModal]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    // Auto-focus close button on open
    const firstFocusable = dialog.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusable = dialog.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <FormModalContext.Provider value={{ openFormModal }}>
      {children}

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[10002] flex items-center justify-center bg-black/60 p-4"
          onClick={closeFormModal}
          role="presentation"
        >
          {/* Modal Card */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-modal-title"
            className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button — 48px tap target for mobile compliance */}
            <button
              onClick={closeFormModal}
              className="absolute right-2 top-2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-xl text-white transition-colors hover:text-gray-300"
              aria-label="Close form"
            >
              ✕
            </button>

            {/* Header */}
            <div className="bg-brand-dark px-8 pb-6 pt-8">
              <p id="form-modal-title" className="pr-10 font-body text-[18px] italic leading-[1.5] text-white">
                {headerText}
              </p>
            </div>

            {/* Form */}
            <div className="px-8 py-8">
              <ContactForm source="schedule-pricing-modal" />
            </div>
          </div>
        </div>
      )}
    </FormModalContext.Provider>
  );
}
