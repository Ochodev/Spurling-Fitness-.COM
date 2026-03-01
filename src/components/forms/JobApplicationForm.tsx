"use client";

import { useState } from "react";
import { usePostHog } from "posthog-js/react";
import { getTrackingData } from "@/lib/tracking";

interface JobApplicationFormProps {
  className?: string;
}

export default function JobApplicationForm({
  className = "",
}: JobApplicationFormProps) {
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
    data.source = "jobs-page";
    data.page_url = window.location.href;

    posthog.capture("form_submitted", {
      ...data,
      $set: {
        email: data.email,
        phone: data.phone,
        name: data.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : data.fullName,
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

    window.location.href = "/thank-you-jobs/";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1 block text-sm font-medium text-brand-gray"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-1 block text-sm font-medium text-brand-gray"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
          />
        </div>
      </div>

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

      <div>
        <label
          htmlFor="experience"
          className="mb-1 block text-sm font-medium text-brand-gray"
        >
          Relevant Experience *
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={4}
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <div>
        <label
          htmlFor="whySpurling"
          className="mb-1 block text-sm font-medium text-brand-gray"
        >
          Why Spurling? *
        </label>
        <textarea
          id="whySpurling"
          name="whySpurling"
          rows={4}
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
        />
      </div>

      <input
        type="submit"
        value={submitting ? "Submitting..." : "Submit Application"}
        disabled={submitting}
        className="w-full cursor-pointer rounded-[5px] bg-brand-red px-8 py-4 font-heading text-[17px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-70"
      />
    </form>
  );
}
