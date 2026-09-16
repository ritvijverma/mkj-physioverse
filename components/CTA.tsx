import { ArrowRight, MessageCircle } from "lucide-react";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-[#0B1F3A] py-20 sm:py-24">
      {/* Background decorations */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
          Start Your Journey
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Take the Next Step Towards Your Physiotherapy Career in Germany
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
          Get in touch to learn more about available mentorship options and
          guidance for your professional journey.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#0B1F3A] shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Explore Programs
            <ArrowRight size={19} />
          </a>

          <WhatsAppInquiry
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </WhatsAppInquiry>
        </div>
      </div>
    </section>
  );
}