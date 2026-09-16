"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";

const contactPhrase = "Have Questions About Your Journey to Germany?";

export default function Contact() {
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasRevealedCards, setHasRevealedCards] = useState(false);

  useEffect(() => {
    const isPhraseComplete = characterCount === contactPhrase.length;
    const isPhraseEmpty = characterCount === 0;
    const delay = isPhraseComplete
      ? 1800
      : isPhraseEmpty && isDeleting
        ? 500
        : isDeleting
          ? 55
          : 95;

    const timeoutId = window.setTimeout(() => {
      if (isPhraseComplete && !isDeleting) {
        setIsDeleting(true);
        setHasRevealedCards(true);
      } else if (isPhraseEmpty && isDeleting) {
        setIsDeleting(false);
      } else {
        setCharacterCount((currentCount) =>
          currentCount + (isDeleting ? -1 : 1)
        );
      }
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [characterCount, isDeleting]);

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 rounded-[2rem] bg-[#0B1F3A] p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Get in Touch
            </span>

            <h2 className="hero-heading-line mt-4 min-h-[3.15em] text-3xl font-bold tracking-tight text-white sm:min-h-[2.1em] sm:text-4xl lg:min-h-[1.05em] lg:text-5xl">
              <span className="hero-typewriter-text">
                {contactPhrase.slice(0, characterCount)}
              </span>
              <span className="hero-static-heading-text">{contactPhrase}</span>
              <span className="hero-typewriter-cursor" aria-hidden="true" />
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-300 sm:text-lg">
              Connect with MKJ Physioverse to learn more about available
              mentorship and guidance options for physiotherapists.
            </p>
{/* 
            <WhatsAppInquiry
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#0B1F3A] transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Chat on WhatsApp
              <ArrowRight size={19} />
            </WhatsAppInquiry> */}
          </div>

          {/* Contact Cards */}
          <div
            className={`contact-social-cards grid gap-4 sm:grid-cols-2 ${
              hasRevealedCards ? "is-visible" : ""
            }`}
          >
            {/* WhatsApp */}
            <WhatsAppInquiry
              className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
                <MessageCircle size={23} />
              </div>

              <h3 className="mt-5 font-bold text-white">
                WhatsApp
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Chat with us directly for more information.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-300">
                Start a conversation →
              </span>
            </WhatsAppInquiry>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mkj_physioverse/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FEDA75] via-[#FA7E1E] to-[#D62976] text-white">
                <FaInstagram size={23} />
              </div>

              <h3 className="mt-5 font-bold text-white">
                Instagram
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Follow MKJ Physioverse for updates and information.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-300">
                Follow us →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}