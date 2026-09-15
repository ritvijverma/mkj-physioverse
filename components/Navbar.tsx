"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Programs", href: "/programs" },
  { name: "Roadmap", href: "/#roadmap" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
<header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">      
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
   <Link
  href="/#home"
  onClick={handleLinkClick}
  className="flex items-center gap-3"
  aria-label="MKJ Physioverse Home"
>
  {/* Logo Icon */}
  <div className="relative h-12 w-12 overflow-hidden sm:h-14 sm:w-14">
    <Image
      src="https://ik.imagekit.io/ritvij/mandeep-mkj/Logo.PNG"
      alt="MKJ Physioverse Logo"
      fill
      priority
      sizes="56px"
      className="scale-[1.8] object-contain"
    />
  </div>

  {/* Brand Name */}
  <div className="flex flex-col leading-none">
    <span className="text-lg font-extrabold tracking-tight text-[#0B1F3A] sm:text-xl">
      MKJ
    </span>

    <span className="mt-1 text-[10px] font-bold tracking-[0.2em] text-blue-600 sm:text-xs">
      PHYSIOVERSE
    </span>
  </div>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#0B1F3A] lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={handleLinkClick}
              className="mt-5 rounded-xl bg-[#0B1F3A] py-4 text-center font-semibold text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}