"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { clientFaqItems } from "@/data/faq";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-heading text-lg font-semibold text-brand-dark sm:text-xl">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-white transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3v10M3 8h10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="whitespace-pre-line font-body leading-relaxed text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h2
          className="mb-4 text-center text-[32px] leading-[1.15] font-semibold uppercase text-brand-dark sm:text-[54px] sm:leading-[1.1]"
          style={{ fontFamily: "var(--font-teko), sans-serif" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-body leading-relaxed text-gray-600">
          Everything you need to know about training at Spurling. Can&apos;t
          find what you&apos;re looking for?{" "}
          <a
            href="/contact-us/"
            className="font-semibold text-brand-red underline hover:text-brand-red-dark"
          >
            Contact us
          </a>{" "}
          and we&apos;ll be happy to help.
        </p>

        <div className="mx-auto max-w-3xl space-y-10">
          {clientFaqItems.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 font-heading text-2xl font-semibold text-brand-red">
                {category.category}
              </h3>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-6">
                {category.items.map((item) => (
                  <FaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
