"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import ContactForm from "@/components/forms/ContactForm";

interface FormModalContextValue {
  openFormModal: () => void;
}

const FormModalContext = createContext<FormModalContextValue>({
  openFormModal: () => {},
});

export function useFormModal() {
  return useContext(FormModalContext);
}

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openFormModal = useCallback(() => setIsOpen(true), []);
  const closeFormModal = useCallback(() => setIsOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFormModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeFormModal]);

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
      <div
        className={`fixed inset-0 z-[10002] flex items-center justify-center bg-black/60 p-4 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeFormModal}
      >
        {/* Modal Card */}
        <div
          className={`relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-2xl transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeFormModal}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl text-brand-red transition-colors hover:text-brand-red-dark"
            aria-label="Close form"
          >
            ✕
          </button>

          {/* Header */}
          <div className="bg-brand-dark px-8 pb-6 pt-8">
            <p className="pr-8 font-body text-[18px] italic leading-[1.5] text-white">
              Fill out the form below and we will send you information on
              scheduling and pricing.
            </p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <ContactForm source="schedule-pricing-modal" />
          </div>
        </div>
      </div>
    </FormModalContext.Provider>
  );
}
