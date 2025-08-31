"use client";

import {
  LuPhoneCall,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
  LuFacebook,
  LuInstagram,
  LuCheck,
} from "react-icons/lu";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C3559] sm:py-16">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column — copy + details */}
          <div className="text-white">
            <div className="flex items-start">
              {/* Left vertical line */}
              <div className="w-1 bg-[#C6912B] mr-4 rounded self-stretch"></div>

              {/* Text */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight lg:whitespace-nowrap text-white">
                  Contactează-ne acum.
                </h2>
                <span className="text-2xl sm:text-3xl font-bold leading-tight lg:whitespace-nowrap text-white">
                  E simplu!
                </span>
              </div>
            </div>

            <ul className="space-y-4 text-white/90 mt-4">
              {[
                "Completează formularul alăturat", // keep original copy (even if form is removed)
                "Te sunăm pentru a stabili o programare gratuită",
                "Ne vedem la birou sau pe WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <LuCheck className="h-3 w-3 text-white" />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 mt-8">
              <a
                href="tel:+4917624227895"
                className="group flex items-center gap-3"
              >
                <span className="inline-flex items-center justify-center">
                  <LuPhoneCall className="h-5 w-5" />
                </span>
                <span className="font-medium group-hover:text-[#C6912B] transition">
                  +49 17624227895
                </span>
              </a>

              <a
                href="mailto:nelutofanconsult@gmail.com"
                className="group flex items-center gap-3"
              >
                <span className="inline-flex items-center justify-center">
                  <LuMail className="h-5 w-5" />
                </span>
                <span className="font-medium group-hover:text-[#C6912B] transition">
                  nelutofanconsult@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center">
                  <LuMapPin className="h-5 w-5" />
                </span>
                <span className="font-medium">
                  Luitgardstraße 14-18, 75177 Pforzheim
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 py-8">
              <a
                aria-label="Facebook"
                href="https://facebook.com"
                className="inline-flex h-10 w-10 items-center justify-center"
              >
                <LuFacebook className="h-8 w-8" />
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                className="inline-flex h-10 w-10 items-center justify-center"
              >
                <LuInstagram className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Right column — WhatsApp / Call / Email card (no form) */}
          <div className="lg:pl-4">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="text-xs font-semibold tracking-wide text-[#C6912B] uppercase">
                Contact
              </p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0C3559]">
                Vreau o programare
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://wa.me/4917624227895?text=Bună!%20Vreau%20o%20programare."
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white bg-[#25D366] ring-1 ring-[#25D366]/50 hover:brightness-95 transition"
                >
                  <LuMessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+4917624227895"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-[#0C3559] bg-white ring-1 ring-gray-200 hover:ring-[#C6912B] hover:text-[#C6912B] transition"
                >
                  <LuPhone className="h-5 w-5" />
                  Sună-mă
                </a>
                <a
                  href="mailto:nelutofanconsult@gmail.com?subject=Programare&body=Bună!%20Aș%20dori%20o%20programare."
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-[#0C3559] bg-white ring-1 ring-gray-200 hover:ring-[#C6912B] hover:text-[#C6912B] transition sm:col-span-2"
                >
                  <LuMail className="h-5 w-5" />
                  Trimite email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
