"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";

const programs = [
  {
    title: "Basic Guidance",
    price: 299,
    description:
      "A simple starting point to understand your physiotherapy career journey in Germany.",
    features: [
      "Career pathway overview",
      "Basic recognition guidance",
      "German language guidance",
    ],
  },
  {
    title: "Personal Guidance",
    price: 399,
    popular: true,
    description:
      "Get more personalised guidance and practical insights for your individual journey.",
    features: [
      "Everything in Basic Guidance",
      "Personalised guidance",
      "Individual Q&A session",
      "Career roadmap",
    ],
  },
  {
    title: "Complete Mentorship",
    price: 499,
    description:
      "A more complete mentorship experience with structured guidance for your journey.",
    features: [
      "Everything in Personal Guidance",
      "Step-by-step guidance",
      "Practical insights",
      "Continued mentorship support",
    ],
  },
];

export default function ProgramsPage() {
  const handlePayment = (program: (typeof programs)[0]) => {
    alert(
      `You selected ${program.title} - ₹${program.price}\n\nPayment page will be added next.`
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="bg-[#0B1F3A] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Mentorship Programs
          </span>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
            Choose the Right Program for Your Journey
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Get guidance and practical insights to better understand your
            journey towards building a physiotherapy career in Germany.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-7 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`relative flex flex-col rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  program.popular
                    ? "border-2 border-blue-500"
                    : "border border-slate-200"
                }`}
              >
                {program.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">
                    MOST POPULAR
                  </span>
                )}

                <h2 className="text-2xl font-bold text-[#0B1F3A]">
                  {program.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {program.description}
                </p>

                {/* Price */}
                <div className="my-7">
                  <span className="text-4xl font-bold text-[#0B1F3A]">
                    ₹{program.price}
                  </span>

                  <span className="ml-2 text-sm text-slate-500">
                    INR
                  </span>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-4">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-blue-600"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Payment Button */}
                <button
                  onClick={() => handlePayment(program)}
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-semibold transition ${
                    program.popular
                      ? "bg-[#0B1F3A] text-white hover:bg-blue-700"
                      : "border border-slate-300 text-[#0B1F3A] hover:bg-slate-50"
                  }`}
                >
                  Choose This Program
                </button>
              </div>
            ))}
          </div>

          {/* Help */}
          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Not sure which program is right for you?
            </p>

            <a
              href="https://wa.me/916306214402"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
            >
              <MessageCircle size={18} />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}