"use client";
import { useState } from "react";

interface FaqItem {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const question = faq.q || faq.question || "";
        const answer = faq.a || faq.answer || "";
        return (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full px-6 py-4 text-left bg-[#F0F5FA] hover:bg-[#e6f2ff] transition-colors flex items-center justify-between group"
            >
              <span className="font-semibold text-[#1e293b]">{question}</span>
              <svg
                className={`w-5 h-5 text-[#046bd2] transition-transform duration-300 flex-shrink-0 ml-4 ${open === index ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-[#334155] leading-relaxed">{answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
