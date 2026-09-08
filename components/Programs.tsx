import { CheckCircle2, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "1-on-1 Guidance Session",
    description:
      "A focused session to discuss your goals, questions, and possible pathway towards working as a physiotherapist in Germany.",
    features: [
      "Career discussion",
      "Process-related guidance",
      "Personal questions answered",
    ],
    featured: false,
  },
  {
    title: "Career Roadmap Mentorship",
    description:
      "Structured guidance to help you understand the different stages of your journey towards Germany.",
    features: [
      "Step-by-step roadmap",
      "Process guidance",
      "Preparation direction",
    ],
    featured: true,
  },
  {
    title: "Personalised Mentorship",
    description:
      "More personalised guidance and ongoing support based on your individual goals and questions.",
    features: [
      "Personalised approach",
      "Ongoing guidance",
      "Dedicated mentorship",
    ],
    featured: false,
  },
];

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
            Choose the Guidance That Fits Your Journey
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Explore mentorship options designed to help physiotherapists better
            understand and prepare for their professional journey to Germany.
          </p>
        </div>

        {/* Program Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className={`relative flex flex-col rounded-3xl border p-7 transition duration-300 sm:p-8 ${
                program.featured
                  ? "border-blue-500 bg-[#0B1F3A] text-white shadow-2xl"
                  : "border-slate-200 bg-white hover:-translate-y-2 hover:shadow-xl"
              }`}
            >
            {/* Program Header */}
<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
  <h3
    className={`text-xl font-bold leading-tight ${
      program.featured ? "text-white" : "text-[#0B1F3A]"
    }`}
  >
    {program.title}
  </h3>

  {program.featured && (
    <span className="w-fit shrink-0 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
      Recommended
    </span>
  )}
</div>

              <h3
                className={`text-xl font-bold ${
                  program.featured ? "text-white" : "text-[#0B1F3A]"
                }`}
              >
                {program.title}
              </h3>

              <p
                className={`mt-4 text-sm leading-7 ${
                  program.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {program.description}
              </p>

              {/* Divider */}
              <div
                className={`my-7 h-px ${
                  program.featured ? "bg-white/10" : "bg-slate-200"
                }`}
              />

              <ul className="space-y-4">
                {program.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${
                      program.featured ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-500"
                    />

                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="https://wa.me/916306214402"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold transition ${
                  program.featured
                    ? "bg-white text-[#0B1F3A] hover:bg-blue-50"
                    : "bg-[#0B1F3A] text-white hover:bg-blue-700"
                }`}
              >
                Contact for Details
                <ArrowRight size={18} />
              </a>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Program details and availability may vary based on individual
          requirements.
        </p>
      </div>
    </section>
  );
}