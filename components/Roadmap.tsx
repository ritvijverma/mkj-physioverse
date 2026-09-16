import { ArrowRight } from "lucide-react";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";

const roadmapSteps = [
  {
    number: "01",
    title: "Eligibility & Qualification Review",
    description:
      "Understand the general requirements and assess the starting point for your professional journey.",
  },
  {
    number: "02",
    title: "Language Preparation",
    description:
      "Understand the language requirements and the role of German proficiency in your professional pathway.",
  },
  {
    number: "03",
    title: "Documentation",
    description:
      "Learn about the important documents and preparation involved in the recognition process.",
  },
  {
    number: "04",
    title: "Recognition Process",
    description:
      "Understand the different stages involved in having your qualifications assessed.",
  },
  {
    number: "05",
    title: "Professional Career",
    description:
      "Prepare for the next stage of building your physiotherapy career in Germany.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-[#0B1F3A] py-20 sm:py-24"
    >
      {/* Background effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Your Career Roadmap
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Step-by-Step Pathway to Germany
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Understanding the journey is the first step. Explore the key stages
            involved in preparing for a physiotherapy career in Germany.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {roadmapSteps.map((step) => (
            <article
              key={step.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.1]"
            >
              {/* Number */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-900/30">
                {step.number}
              </div>

              <h3 className="mt-6 text-lg font-bold leading-snug text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <WhatsAppInquiry
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Get Guidance for Your Journey
            <ArrowRight size={19} />
          </WhatsAppInquiry>
        </div>
      </div>
    </section>
  );
}