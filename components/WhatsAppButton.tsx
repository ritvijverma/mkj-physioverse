

"use client";

import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MessageCircle, X } from "lucide-react";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";

const socialLinks = [
  {
    name: "Connect on LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
    className: "bg-[#0A66C2]",
  },
  {
    name: "Follow on Instagram",
    href: "https://www.instagram.com/mkj_physioverse/",
    icon: FaInstagram,
    className:
      "bg-gradient-to-tr from-[#FEDA75] via-[#FA7E1E] to-[#D62976]",
  },
  {
    name: "Chat on WhatsApp",
    icon: FaWhatsapp,
    className: "bg-[#25D366]",
  },
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {isOpen && (
        <div className="flex flex-col gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            const content = (
              <>
                <span className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0B1F3A] shadow-lg transition group-hover:scale-105">
                  {social.name}
                </span>

                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110 ${social.className}`}
                >
                  <Icon size={22} />
                </span>
              </>
            );

            if (social.name === "Chat on WhatsApp") {
              return (
                <WhatsAppInquiry
                  key={social.name}
                  className="group flex items-center justify-end gap-3"
                >
                  {content}
                </WhatsAppInquiry>
              );
            }

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group flex items-center justify-end gap-3"
              >
                {content}
              </a>
            );
          })}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close social links" : "Open social links"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1F3A] text-white shadow-xl transition hover:scale-105"
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={25} />}
      </button>
    </div>
  );
}