"use client";

import { useState, FormEvent } from "react";

interface JobApplicationFormProps {
  className?: string;
}

export default function JobApplicationForm({ className = "" }: JobApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      experience: formData.get("experience"),
      whySpurling: formData.get("whySpurling"),
      source: "jobs-page",
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
          Application Received!
        </h3>
        <p className="mt-2 text-green-700">
          Thank you for your interest. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-brand-gray">
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
          <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-brand-gray">
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

      <div>
        <label htmlFor="experience" className="mb-1 block text-sm font-medium text-brand-gray">
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
        <label htmlFor="whySpurling" className="mb-1 block text-sm font-medium text-brand-gray">
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

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us at info@spurlingfitness.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full cursor-pointer rounded-[5px] bg-brand-red px-8 py-4 font-heading text-[17px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
