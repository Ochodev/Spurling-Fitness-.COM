"use client";

import { useEffect, useRef } from "react";
import { usePostHog } from "posthog-js/react";
import { getTrackingData } from "@/lib/tracking";

const inputStyles =
  "w-full rounded-md border border-gray-300 px-4 py-3.5 text-base font-medium text-brand-gray outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red";

export default function GiveawayForm() {
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
      className="space-y-5"
    >
      {/* Hidden tracking fields */}
      <input type="hidden" name="source" value="giveaway-page" />
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
          htmlFor="gw-fullName"
          className="mb-1.5 block text-base font-bold text-brand-dark"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="gw-fullName"
          name="fullName"
          required
          className={inputStyles}
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="gw-phone"
          className="mb-1.5 block text-base font-bold text-brand-dark"
        >
          Phone *
        </label>
        <input
          type="tel"
          id="gw-phone"
          name="phone"
          required
          pattern="[\d\s\-\(\)\+]{10,}"
          title="Please enter a valid phone number (at least 10 digits)"
          className={inputStyles}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="gw-email"
          className="mb-1.5 block text-base font-bold text-brand-dark"
        >
          Email *
        </label>
        <input
          type="email"
          id="gw-email"
          name="email"
          required
          className={inputStyles}
        />
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
            <label
              key={loc.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="location"
                value={loc.value}
                required
                className="h-4 w-4 border-gray-300 text-brand-red accent-brand-red"
              />
              <span className="text-base font-medium text-brand-gray">
                {loc.label}
              </span>
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
            <label
              key={pref}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="contactPreference"
                value={pref.toLowerCase().replace(" ", "-")}
                required
                className="h-4 w-4 border-gray-300 text-brand-red accent-brand-red"
              />
              <span className="text-base font-medium text-brand-gray">
                {pref}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Why Win */}
      <div>
        <label
          htmlFor="gw-whyWin"
          className="mb-1.5 block text-base font-bold text-brand-dark"
        >
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

      <input
        type="submit"
        value="Enter the Giveaway"
        className="w-full cursor-pointer rounded-[5px] bg-brand-red px-8 py-5 font-heading text-2xl font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
      />
    </form>
  );
}
