import { MapPin, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function Footer() {
  return (
    <footer className="bg-[#07172D] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block">
              <p className="text-2xl font-bold tracking-tight">
                MKJ
              </p>

              <p className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                PHYSIOVERSE
              </p>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Guidance and mentorship for physiotherapists planning their
              professional journey to Germany.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentor */}
          <div>
            <h3 className="font-semibold text-white">
              Your Mentor
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>Dr. Mandeep Yadav, PT</p>

              <div className="flex items-start gap-2">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-400"
                />
                <span>
                  Reha im Wertheim, Germany
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="https://wa.me/916306214402"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <MessageCircle size={18} className="text-blue-400" />
                WhatsApp
              </a>

              <a
  href="https://www.instagram.com/mkj_physioverse/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
>
  <FaInstagram className="text-[18px] text-blue-400" />
  @mkj_physioverse
</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MKJ Physioverse. All rights reserved.
          </p>

          <p>
            Build your physiotherapy career with clear guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}