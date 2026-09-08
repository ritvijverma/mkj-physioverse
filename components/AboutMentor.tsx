import { MapPin, BriefcaseBusiness, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Working in Germany",
    description:
      "A practising physiotherapist currently building professional experience in Germany.",
  },
  {
    icon: MapPin,
    title: "Based in Wertheim",
    description:
      "Currently working at Reha im Wertheim, Germany.",
  },
  {
    icon: GraduationCap,
    title: "Practical Perspective",
    description:
      "Guidance shaped by real-world professional experience and personal understanding of the journey.",
  },
];

export default function AboutMentor() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Image / Profile Area */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50 p-8">
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-blue-100 bg-white/70 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#0B1F3A] text-3xl font-bold text-white">
                  MY
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                  Dr. Mandeep Yadav
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Physiotherapist & Mentor
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-[#0B1F3A] px-5 py-4 text-white shadow-xl sm:-right-6">
              <p className="text-xs text-slate-300">
                Professional Experience
              </p>

              <p className="mt-1 font-semibold">
                🇩🇪 Germany
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Meet Your Mentor
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
              Guidance from Someone Who Has Taken the Journey
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Dr. Mandeep Yadav, PT, is a practising physiotherapist currently
              working in Germany. Through MKJ Physioverse, he shares practical
              guidance and information for physiotherapists who are planning
              their professional journey to Germany.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              The goal is to make the process easier to understand by sharing
              structured guidance, practical perspectives, and important
              information based on real-world experience.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-[#0B1F3A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}