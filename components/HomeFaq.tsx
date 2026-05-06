"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

export default function HomeFaq({ items }: { items: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#1e293b]">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {items.map((faq, index) => {
          const isOpen = openFaq === index;
          const answerId = `home-faq-answer-${index}`;

          return (
            <div key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full px-6 py-4 text-left bg-[#F0F5FA] hover:bg-[#e6f2ff] transition-colors flex items-center justify-between group"
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span className="font-semibold text-[#1e293b]">{faq.q}</span>
                <svg className={`w-5 h-5 text-[#046bd2] transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div id={answerId} className="px-6 py-4 bg-white">
                  <p className="text-[#334155]">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
