import {
  BriefcaseBusiness,
  Map,
  MessageCircleQuestion,
  Route,
} from "lucide-react";

const trustPoints = [
  {
    icon: BriefcaseBusiness,
    title: "Real-World Experience",
    description:
      "Learn from practical experience and insights gained while working as a physiotherapist in Germany.",
  },
  {
    icon: Map,
    title: "Clear Career Guidance",
    description:
      "Understand the different steps involved in building your physiotherapy career in Germany.",
  },
  {
    icon: Route,
    title: "Structured Roadmap",
    description:
      "Get clear guidance to help you understand your journey and prepare for the process step by step.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Personalised Support",
    description:
      "Get mentorship and guidance based on your questions, goals, and individual situation.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="why-us"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why MKJ Physioverse?
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
            Guidance from Someone Who Understands the Journey
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Get practical information and structured mentorship designed for
            physiotherapists who are planning to build their professional
            careers in Germany.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#0B1F3A]">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}