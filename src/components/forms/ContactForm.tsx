"use client";

import { useState, FormEvent } from "react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      source,
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`rounded-lg bg-green-50 p-8 text-center ${className}`}>
        <h3 className="font-heading text-2xl font-semibold text-green-800">
          Thank You!
        </h3>
        <p className="mt-2 text-green-700">
          Our team will be reaching out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-brand-gray">
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
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-gray">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-gray">
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
            <label key={loc.value} className="flex items-center gap-2 cursor-pointer">
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
          <span className="text-xs leading-relaxed text-brand-gray-light">
            By checking this box, I consent to receive transactional messages
            related to my account, orders, or services I have requested. I
            understand that my consent is not a condition of any purchase. Message
            and data rates may apply.
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us at 207-467-3757.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full cursor-pointer rounded-[5px] bg-brand-red px-8 py-4 font-heading text-[17px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
