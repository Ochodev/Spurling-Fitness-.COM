"use client";

import { useState, FormEvent } from "react";
import { usePostHog } from "posthog-js/react";
import { getTrackingData } from "@/lib/tracking";

const inputStyles =
  "w-full rounded-md border border-gray-300 px-4 py-3.5 text-base font-medium text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red";

export default function GiveawayForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const posthog = usePostHog();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const tracking = getTrackingData();
    const fullName = (formData.get("fullName") as string).trim();
    const nameParts = fullName.split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const data = {
      fullName,
      firstName,
      lastName,
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      contactPreference: formData.get("contactPreference"),
      whyWin: formData.get("whyWin"),
      source: "giveaway-page",
      page_url: window.location.href,
      ...tracking,
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      posthog.identify(data.email as string, {
        name: fullName,
        phone: data.phone as string,
      });
      posthog.capture("giveaway_entry_submitted", {
        source: "giveaway-page",
        location: data.location,
        page_url: data.page_url,
      });

      const location = data.location as string;
      window.location.href = location
        ? `/thank-you-${location}/`
        : "/thank-you/";
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="gw-fullName" className="mb-1.5 block text-base font-bold text-brand-dark">
          Full Name *
        </label>
        <input type="text" id="gw-fullName" name="fullName" required className={inputStyles} />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="gw-phone" className="mb-1.5 block text-base font-bold text-brand-dark">
          Phone *
        </label>
        <input type="tel" id="gw-phone" name="phone" required className={inputStyles} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="gw-email" className="mb-1.5 block text-base font-bold text-brand-dark">
          Email *
        </label>
        <input type="email" id="gw-email" name="email" required className={inputStyles} />
      </div>

      {/* Location */}
      <div>
        <p className="mb-2 text-base font-bold text-brand-dark">
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
                required
                className="h-4 w-4 border-gray-300 text-brand-red accent-brand-red"
              />
              <span className="text-base font-medium text-brand-gray">{loc.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Contact Preference */}
      <div>
        <p className="mb-2 text-base font-bold text-brand-dark">
          How Do You Prefer to Be Contacted? *
        </p>
        <div className="space-y-2">
          {["Phone Call", "Text Message", "Email"].map((pref) => (
            <label key={pref} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactPreference"
                value={pref.toLowerCase().replace(" ", "-")}
                required
                className="h-4 w-4 border-gray-300 text-brand-red accent-brand-red"
              />
              <span className="text-base font-medium text-brand-gray">{pref}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Why Win */}
      <div>
        <label htmlFor="gw-whyWin" className="mb-1.5 block text-base font-bold text-brand-dark">
          What Would It Mean to You to Win This? *
        </label>
        <textarea
          id="gw-whyWin"
          name="whyWin"
          required
          rows={5}
          className={`${inputStyles} resize-none`}
        />
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

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us at 207-467-3757.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full cursor-pointer rounded-[5px] bg-brand-red px-8 py-5 font-heading text-2xl font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Enter the Giveaway"}
      </button>
    </form>
  );
}
