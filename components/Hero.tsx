import { ArrowRight, MessageCircle } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";

export default function Hero() {
  return (
   <section
  id="home"
  className="relative overflow-hidden bg-[#F8FAFC] pt-20"
>
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-10 lg:pt-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Guidance for Physiotherapists
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-[#0B1F3A] sm:text-6xl lg:text-7xl">
              Build Your
              <span className="block text-blue-600">
                Physiotherapy Career
              </span>
              <span className="block">
                in Germany with Clear Guidance.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Get structured mentorship, practical guidance, and important
              information to help you navigate your journey towards working as
              a physiotherapist in Germany.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Mentored by Dr. Mandeep Yadav, PT — a practising physiotherapist
              currently working in Germany.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Explore Mentorship
                <ArrowRight size={20} />
              </a>

              <WhatsAppInquiry
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-[#0B1F3A] shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </WhatsAppInquiry>
            </div>
          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-9">

              {/* Header */}
              <div className="flex items-center gap-4">
                {/* Logo Placeholder */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] text-lg font-bold text-white">
                  MKJ
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0B1F3A] sm:text-2xl">
                    Dr. Mandeep Yadav
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-[#C4862D]">
                    Physiotherapist & Mentor
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Working in Germany
                  </p>
                </div>
              </div>

              {/* Professional Info */}
              <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Professional Profile
                </p>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[#0B1F3A]">
                    Guidance based on real-world experience
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Practical information and structured mentorship for
                    physiotherapists planning their professional journey
                    towards Germany.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-7 border-l-4 border-[#C4862D] pl-5">
                <p className="text-sm italic leading-7 text-slate-600">
                  “The journey can feel complicated when you do not know where
                  to begin. Clear guidance helps you understand the process,
                  step by step.”
                </p>
              </div>

              {/* Footer / Social */}
              <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
                <span className="text-sm font-medium text-slate-500">
                  Connect with us
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/mkj_physioverse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-pink-600 transition hover:bg-pink-50"
                  >
                    <FaInstagram size={22} />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[#0A66C2] transition hover:bg-blue-50"
                  >
                    <FaLinkedinIn size={21} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}