"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Star, X } from "lucide-react";
import { programs } from "@/lib/programs";

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<
    (typeof programs)[number] | null
  >(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setSelectedProgram(null);
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProgram) return;

    const message = `Hi Dr. Mandeep,

I am interested in the ${selectedProgram.title}${
      selectedProgram.price ? ` (₹${selectedProgram.price})` : ""
    }.

My Details:
Name: ${name}
WhatsApp Number: ${phone}
Email: ${email}

I would like to know more about the program and the next steps.`;

    const whatsappUrl = `https://wa.me/916306214402?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    handleClose();
  };

  return (
    <>
      <section id="programs" className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Mentorship Programs
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
              Choose the Right Program for Your Journey
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              From your first career questions to long-term professional
              preparation, choose the level of guidance that fits your goals.
            </p>
          </div>

          {/* Program Cards */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.id}
                className={`relative flex flex-col rounded-3xl border p-6 transition duration-300 sm:p-7 ${
                  program.popular
                    ? "border-blue-500 bg-[#0B1F3A] text-white shadow-2xl md:-translate-y-2"
                    : "border-slate-200 bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl"
                }`}
              >
                {/* Recommended */}
                {program.popular && (
                  <div className="absolute -top-3 left-6 flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                    <Star size={13} fill="currentColor" />
                    Recommended
                  </div>
                )}

                {/* Title */}
                <div className={program.popular ? "pt-3" : ""}>
                  <h3
                    className={`text-xl font-bold leading-tight ${
                      program.popular
                        ? "text-white"
                        : "text-[#0B1F3A]"
                    }`}
                  >
                    {program.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm font-semibold leading-6 ${
                      program.popular
                        ? "text-blue-300"
                        : "text-blue-600"
                    }`}
                  >
                    {program.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div
                  className={`mt-6 rounded-2xl p-4 ${
                    program.popular
                      ? "bg-white/10"
                      : "bg-slate-50"
                  }`}
                >
                  <p
                    className={`text-xs font-medium ${
                      program.popular
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    Program Fee
                  </p>

                  <p
                    className={`mt-1 text-2xl font-bold ${
                      program.popular
                        ? "text-white"
                        : "text-[#0B1F3A]"
                    }`}
                  >
                    {program.price
                      ? `₹${program.price}`
                      : "Contact for Pricing"}
                  </p>
                </div>

                {/* Description */}
                <p
                  className={`mt-5 text-sm leading-7 ${
                    program.popular
                      ? "text-slate-300"
                      : "text-slate-600"
                  }`}
                >
                  {program.description}
                </p>

                {/* Divider */}
                <div
                  className={`my-6 h-px ${
                    program.popular
                      ? "bg-white/10"
                      : "bg-slate-200"
                  }`}
                />

                {/* What's Included */}
                <div>
                  <h4
                    className={`text-sm font-bold ${
                      program.popular
                        ? "text-white"
                        : "text-[#0B1F3A]"
                    }`}
                  >
                    What's Included
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2.5 text-sm leading-6 ${
                          program.popular
                            ? "text-slate-300"
                            : "text-slate-600"
                        }`}
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-blue-500"
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div
                  className={`mt-6 rounded-2xl p-4 ${
                    program.popular
                      ? "bg-white/5"
                      : "bg-blue-50"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      program.popular
                        ? "text-blue-300"
                        : "text-blue-600"
                    }`}
                  >
                    Outcome
                  </p>

                  <p
                    className={`mt-2 text-sm leading-6 ${
                      program.popular
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}
                  >
                    {program.outcome}
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProgram(program)}
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    program.popular
                      ? "bg-white text-[#0B1F3A] hover:bg-blue-50"
                      : "bg-[#0B1F3A] text-white hover:bg-blue-700"
                  }`}
                >
                  {program.price ? "Get Started" : "Enquire Now"}

                  <ArrowRight size={17} />
                </button>
              </article>
            ))}
          </div>

          {/* Commitment */}
          <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-blue-100 bg-white p-7 text-center shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Commitment
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
              You&apos;re Never Alone in Your Germany Journey
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              I&apos;ll personally guide you through every stage — from your
              first question to your final goal — so you can move forward
              with confidence.
            </p>
          </div>

          {/* Note */}
          <p className="mt-8 text-center text-xs leading-6 text-slate-500 sm:text-sm">
            Program structure and availability may vary based on individual
            requirements. Please contact us for complete details.
          </p>
        </div>
      </section>

      {/* Inquiry Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F3A]/60 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">

            {/* Close */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#0B1F3A]"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                Program Inquiry
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#0B1F3A]">
                Let&apos;s Get Started
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Please share your details and we&apos;ll continue the
                conversation with you on WhatsApp.
              </p>
            </div>

            {/* Selected Program */}
            <div className="mt-6 rounded-2xl bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Selected Program
              </p>

              <p className="mt-1 font-bold text-[#0B1F3A]">
                {selectedProgram.title}
              </p>

              <p className="mt-1 text-sm font-semibold text-blue-600">
                {selectedProgram.price
                  ? `₹${selectedProgram.price}`
                  : "Contact for Pricing"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  WhatsApp Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Continue to WhatsApp
                <ArrowRight size={17} />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your details will be added to the WhatsApp message so the
                mentorship team can assist you faster.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}