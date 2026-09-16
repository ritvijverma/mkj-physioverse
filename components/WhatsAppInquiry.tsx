"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/contact";

type Program = {
  id: string;
  title: string;
  price: number | null;
};

type WhatsAppInquiryProps = {
  program?: Program;
  children?: React.ReactNode;
  className?: string;
};

export default function WhatsAppInquiry({
  program,
  children,
  className = "",
}: WhatsAppInquiryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = program
      ? `Hi Dr. Mandeep,

I am interested in the ${program.title}${
          program.price ? ` (₹${program.price})` : ""
        }.

My Details:
Name: ${name}
WhatsApp Number: ${phone}
Email: ${email}

I would like to know more about the program and the next steps.`
      : `Hi Dr. Mandeep,

I would like to know more about MKJ Physioverse and the mentorship programs.

My Details:
Name: ${name}
WhatsApp Number: ${phone}
Email: ${email}

Please let me know how I can get started.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    handleClose();
  };

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children || (
          <>
            <MessageCircle size={18} />
            Chat with us on WhatsApp
          </>
        )}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1F3A]/60 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">

            {/* Close */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#0B1F3A]"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="pr-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                {program ? "Program Inquiry" : "WhatsApp Inquiry"}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A]">
                {program ? "Let's Get Started" : "Let's Connect"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share your details and continue the conversation with us
                on WhatsApp.
              </p>
            </div>

            {/* Selected Program */}
            {program && (
              <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Selected Program
                </p>

                <p className="mt-1 font-bold text-[#0B1F3A]">
                  {program.title}
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-600">
                  {program.price
                    ? `₹${program.price}`
                    : "Contact for Pricing"}
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="whatsapp-name"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Full Name
                </label>

                <input
                  id="whatsapp-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label
                  htmlFor="whatsapp-phone"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  WhatsApp Number
                </label>

                <input
                  id="whatsapp-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="whatsapp-email"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Email Address
                </label>

                <input
                  id="whatsapp-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Continue to WhatsApp
                <ArrowRight size={17} />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your details will be added to the WhatsApp message so we
                can assist you faster.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}