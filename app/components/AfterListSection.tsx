"use client"

import Link from "next/link"
import {
    Phone,
    MessageSquare,
    ShieldCheck,
    PiggyBank,
    Users,
    Timer,
} from "lucide-react"

export function AfterListSection() {
    return (
        <div className="mt-16 space-y-10">
            {/* 1) CTA Banner */}
            <div className="rounded-2xl bg-gradient-to-b from-[#0C3559] to-[#082640] p-6 sm:p-8 text-white shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="space-y-2">
                        <p className="text-[#C6912B] font-semibold tracking-wide uppercase text-xs sm:text-sm">
                            Următorul pas
                        </p>
                        <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold font-roboto">
                            Primești o ofertă personalizată în 24h
                        </h2>
                        <p className="mt-2 text-white/80">
                            Comparație transparentă între companii, fără costuri
                            ascunse.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold
              bg-white text-[#0C3559] ring-1 ring-white/20 shadow-sm
              hover:bg-[#fefcf8] hover:text-[#C6912B] hover:ring-[#C6912B] transition"
                        >
                            <Phone className="h-5 w-5" />
                            Programează o consultație
                        </Link>

                        <Link
                            href="https://wa.me/4917624227895"
                            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold
              bg-[#0C3559] text-white ring-1 ring-white/30 shadow-sm
              hover:bg-[#0a2236] transition"
                        >
                            <MessageSquare className="h-5 w-5" />
                            Scrie pe WhatsApp
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2) Trust & Benefits */}
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        title: "Independent & transparent",
                        desc: "Lucrăm cu mai mulți asigurători – alegi ce ți se potrivește.",
                        Icon: ShieldCheck,
                    },
                    {
                        title: "Economii reale",
                        desc: "Optimizăm costurile fără să sacrificăm acoperirea.",
                        Icon: PiggyBank,
                    },
                    {
                        title: "Asistență pe termen lung",
                        desc: "Suntem alături la dosare și renegocieri.",
                        Icon: Users,
                    },
                    {
                        title: "Rapid & simplu",
                        desc: "Proces clar în pași mici, 100% online dacă vrei.",
                        Icon: Timer,
                    },
                ].map(({ title, desc, Icon }) => (
                    <li
                        key={title}
                        className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 
            hover:-translate-y-1 hover:shadow-lg hover:ring-[#C6912B] transition"
                    >
                        <div
                            className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full
              bg-[#0C3559] text-white group-hover:bg-[#C6912B] transition"
                        >
                            <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-[#0C3559] font-semibold group-hover:text-[#C6912B] transition">
                            {title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">{desc}</p>
                    </li>
                ))}
            </ul>

            {/* 3) Mini-FAQ */}
        </div>
    )
}
