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
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50 p-3 sm:p-5">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-slate-100">

                <img
                  src="https://ik.imagekit.io/ritvij/mandeep-mkj/img_mandeep_01.png"
                  alt="Dr. Mandeep Yadav - Physiotherapist and Mentor"
                  className="h-full w-full object-cover object-center"
                />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1F3A]/80 via-[#0B1F3A]/20 to-transparent px-6 pb-6 pt-20">
                  <p className="text-sm font-medium text-white/80">
                    Dr. Mandeep Yadav, PT
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    Physiotherapist & Mentor
                  </p>
                </div>
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
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
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