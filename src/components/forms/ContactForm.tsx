"use client";

import { useEffect, useRef } from "react";
import { usePostHog } from "posthog-js/react";
import { getTrackingData } from "@/lib/tracking";

interface ContactFormProps {
  source?: string;
  locationDefault?: string;
  submitLabel?: string;
  className?: string;
}

export default function ContactForm({
  source = "website",
  locationDefault = "",
  submitLabel = "Get Started",
  className = "",
}: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const posthog = usePostHog();

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const tracking = getTrackingData();
    Object.entries(tracking).forEach(([key, value]) => {
      const input = form.querySelector<HTMLInputElement>(
        `input[name="${key}"]`
      );
      if (input) input.value = value;
    });

    const pageUrlInput = form.querySelector<HTMLInputElement>(
      'input[name="page_url"]'
    );
    if (pageUrlInput) pageUrlInput.value = window.location.href;

    const handleSubmit = () => {
      const formData = new FormData(form);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
      posthog.capture("form_submitted", data);
    };
    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, [posthog]);

  return (
    <form
      ref={formRef}
      action="/api/contact/"
      method="POST"
      className={`space-y-5 ${className}`}
    >
      {/* Hidden tracking fields */}
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="page_url" value="" />
      <input type="hidden" name="utm_source" value="" />
      <input type="hidden" name="utm_medium" value="" />
      <input type="hidden" name="utm_campaign" value="" />
      <input type="hidden" name="utm_content" value="" />
      <input type="hidden" name="utm_term" value="" />
      <input type="hidden" name="gclid" value="" />
      <input type="hidden" name="fbclid" value="" />
      <input type="hidden" name="msclkid" value="" />
      <input type="hidden" name="adsu_cid" value="" />
      <input type="hidden" name="adsu_asid" value="" />
      <input type="hidden" name="adsu_aid" value="" />
      <input type="hidden" name="landing_page" value="" />
      <input type="hidden" name="referrer" value="" />

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="mb-1 block text-sm font-medium text-brand-gray"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-brand-gray"
        >
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          pattern="[\d\s\-\(\)\+]{10,}"
          title="Please enter a valid phone number (at least 10 digits)"
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-brand-gray"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      {/* Location — Radio buttons */}
      <div>
        <p className="mb-2 text-sm font-medium text-brand-gray">
          Which Location Are You Interested In? *
        </p>
        <div className="space-y-2">
          {[
            { value: "kennebunk", label: "Kennebunk" },
            { value: "scarborough", label: "Scarborough" },
            { value: "south-portland", label: "South Portland" },
          ].map((loc) => (
            <label
              key={loc.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="location"
                value={loc.value}
                defaultChecked={locationDefault === loc.value}
                required
                className="h-4 w-4 border-gray-300 text-brand-red accent-brand-red"
              />
              <span className="text-sm text-brand-gray">{loc.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* SMS Consent */}
      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="smsConsent"
            required
            className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-red accent-brand-red"
          />
          <span className="text-[10px] leading-snug text-brand-gray-light">
            By checking this box, I consent to receive transactional messages
            related to my account, orders, or services I have requested. I
            understand that my consent is not a condition of any purchase. Message
            and data rates may apply.
          </span>
        </label>
      </div>

      <input
        type="submit"
        value={submitLabel}
        className="w-full cursor-pointer rounded-[5px] bg-brand-red px-8 py-4 font-heading text-[17px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
      />
    </form>
  );
}
