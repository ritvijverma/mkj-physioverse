"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";

const faqs = [
  {
    question: "Who is this mentorship program for?",
    answer:
      "This mentorship is designed for physiotherapists who are interested in understanding the pathway towards building a professional career in Germany.",
  },
  {
    question: "Do I need to know German before starting?",
    answer:
      "German language proficiency is an important part of the professional journey. The exact requirements and preparation needed can vary depending on your individual situation.",
  },
  {
    question: "Will the mentorship help me understand the recognition process?",
    answer:
      "The mentorship is intended to provide guidance and information about the different stages involved in the professional recognition journey.",
  },
  {
    question: "Can I get guidance before starting my journey?",
    answer:
      "Yes. You can connect with MKJ Physioverse to understand the available guidance options and determine your next steps.",
  },
  {
    question: "Is this mentorship suitable for students as well?",
    answer:
      "The suitability of the mentorship may depend on your current qualification and career stage. You can get in touch to understand which guidance option may be relevant for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
            Got Questions? We Have Answers.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Find answers to some common questions about the physiotherapy
            career journey in Germany.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-blue-200 bg-white shadow-md"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#0B1F3A]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-600">
            Still have questions?
          </p>

          <WhatsAppInquiry
            className="mt-3 inline-flex font-semibold text-blue-600 transition hover:text-blue-800"
          >
            Ask us on WhatsApp →
          </WhatsAppInquiry>
        </div>
      </div>
    </section>
  );
}