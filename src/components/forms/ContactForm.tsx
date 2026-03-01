"use client";

import { useState } from "react";
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
  const [submitting, setSubmitting] = useState(false);
  const posthog = usePostHog();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // Merge tracking data + metadata
    Object.assign(data, getTrackingData());
    data.source = source;
    data.page_url = window.location.href;

    posthog.capture("form_submitted", {
      ...data,
      $set: {
        email: data.email,
        phone: data.phone,
        name: data.fullName,
        location: data.location,
        source: data.source,
        utm_source: data.utm_source,
        utm_medium: data.utm_medium,
        utm_campaign: data.utm_campaign,
        utm_content: data.utm_content,
        utm_term: data.utm_term,
        utm_matchtype: data.utm_matchtype,
        gclid: data.gclid,
        fbclid: data.fbclid,
        msclkid: data.msclkid,
        landing_page: data.landing_page,
        referrer: data.referrer,
        page_url: data.page_url,
      },
    });

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
    } catch {
      // Still redirect on error to avoid blocking user
    }

    const location = data.location || "";
    window.location.href = location ? `/thank-you-${location}/` : "/thank-you/";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-5 ${className}`}
    >
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
        value={submitting ? "Submitting..." : submitLabel}
        disabled={submitting}
        className="w-full cursor-pointer rounded-[5px] bg-brand-red px-8 py-4 font-heading text-[17px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-70"
      />
    </form>
  );
}
