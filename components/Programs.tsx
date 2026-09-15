import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import { programs } from "@/lib/programs";

export default function Programs() {
  return (
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
<div className="mt-14 grid gap-8 md:grid-cols-2">          {programs.map((program) => (
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
              <a
                href="https://wa.me/916306214402"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                  program.popular
                    ? "bg-white text-[#0B1F3A] hover:bg-blue-50"
                    : "bg-[#0B1F3A] text-white hover:bg-blue-700"
                }`}
              >
                {program.price ? "Get Started" : "Enquire Now"}

                <ArrowRight size={17} />
              </a>
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
  );
}