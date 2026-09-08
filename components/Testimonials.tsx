"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Client Name",
    role: "Physiotherapist",
    location: "India",
    feedback:
      "The guidance helped me better understand the different steps involved in planning my professional journey to Germany.",
  },
  {
    name: "Client Name",
    role: "Physiotherapist",
    location: "India",
    feedback:
      "The mentorship provided a clearer perspective on the process and helped me understand what I needed to focus on.",
  },
  {
    name: "Client Name",
    role: "Physiotherapist",
    location: "India",
    feedback:
      "The practical guidance and real-world insights made the journey easier to understand and approach with more confidence.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
            Experiences Shared by Physiotherapists
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Feedback from physiotherapists who have received guidance through
            MKJ Physioverse.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-7 text-center shadow-sm sm:p-12">
            {/* Quote Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Quote size={27} />
            </div>

            {/* Review */}
            <blockquote className="mt-7 text-lg leading-8 text-[#0B1F3A] sm:text-xl sm:leading-9">
              “{testimonial.feedback}”
            </blockquote>

            {/* Divider */}
            <div className="mx-auto my-8 h-px w-16 bg-blue-200" />

            {/* Client Details */}
            <div>
              <h3 className="font-bold text-[#0B1F3A]">
                {testimonial.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {testimonial.role} · {testimonial.location}
              </p>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F3A] shadow-lg transition hover:bg-blue-50 md:flex"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F3A] shadow-lg transition hover:bg-blue-50 md:flex"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="mt-6 flex justify-center gap-4 md:hidden">
          <button
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0B1F3A]"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0B1F3A]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}