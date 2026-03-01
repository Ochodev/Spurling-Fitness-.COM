"use client";

import { useState, type ReactNode } from "react";

interface AccordionItem {
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`divide-y divide-gray-200 ${className}`}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="flex w-full cursor-pointer items-center justify-between py-5 text-left transition-colors hover:text-brand-red"
          >
            <span className="pr-4 font-heading text-xl font-bold text-brand-dark">
              {item.question}
            </span>
            <span
              className={`shrink-0 text-2xl text-brand-red transition-transform duration-200 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[3000px] pb-5" : "max-h-0"
            }`}
          >
            <div className="text-lg font-medium leading-relaxed text-brand-gray-light">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
