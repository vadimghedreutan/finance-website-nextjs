"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"

function YouTubeLite({ id, title }: { id: string; title: string }) {
    const reducedMotion = useReducedMotion()
    const [active, setActive] = useState(false)
    const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

    return (
        <div className="w-full aspect-video rounded-xl bg-white border border-gray-200 p-1 shadow-sm">
            <motion.div
                className="relative w-full h-full overflow-hidden rounded-lg"
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                    reducedMotion
                        ? { duration: 0.2 }
                        : { type: "spring", stiffness: 120, damping: 18 }
                }
            >
                {active ? (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={title}
                        className="absolute inset-0 h-full w-full rounded-lg"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                ) : (
                    <button
                        type="button"
                        className="group absolute inset-0 w-full h-full text-left"
                        onClick={() => setActive(true)}
                        aria-label={`Redă: ${title}`}
                    >
                        <img
                            src={poster}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover rounded-lg"
                            loading="lazy"
                        />
                        <span
                            className="absolute inset-0 grid place-items-center group-hover:bg-black/40 transition-colors rounded-lg"
                            aria-hidden="true"
                        >
                            <span className="inline-flex items-center justify-center rounded-full w-16 h-16 bg-white/95 shadow">
                                ▶
                            </span>
                        </span>
                    </button>
                )}
            </motion.div>
        </div>
    )
}

export default function Hero() {
    return (
        <section
            className="py-8 sm:py-12 bg-gray-50"
            aria-labelledby="hero-title"
        >
            <div className="mx-auto max-w-[1280px] px-4">
                {/* Layout: stacked on mobile, 2 cols on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Text / CTAs */}
                    <div className="text-center md:text-left">
                        <p className="text-[#C6912B] text-xs sm:text-sm font-semibold tracking-wider uppercase pb-3 md:pb-0">
                            ÎNAINTE DE TOATE PRIVEȘTE ACEST VIDEO
                        </p>

                        <h1
                            id="hero-title"
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-roboto text-[#0C3559]"
                        >
                            Consultanță financiară transparentă și independentă
                            în limba Română!
                        </h1>

                        {/* CTAs: full-width stacked on mobile, inline on ≥sm */}
                        <div className="mt-8 md:mt-5 flex flex-col md:flex-row md:flex-wrap md:items-center gap-3 sm:justify-start justify-center">
                            {/* Primary */}
                            <Link
                                href="#contact"
                                aria-label="Programează o consultație"
                                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold
                           text-white shadow-sm outline-none
                           bg-gradient-to-b from-[#0C3559] to-[#082640]
                           hover:from-[#102d4d] hover:to-[#0a2236]
                           active:from-[#0a2236] active:to-[#071a2b]
                           focus-visible:ring-2 focus-visible:ring-[#C6912B]
                           transition"
                            >
                                Consultație
                            </Link>

                            {/* Secondary */}
                            <Link
                                href="/abonare"
                                aria-label="Abonează-te la serviciile noastre"
                                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold
                           text-[#0C3559] bg-white ring-1 ring-gray-200 shadow-sm outline-none
                           hover:bg-[#fefcf8] hover:ring-[#C6912B] hover:text-[#C6912B]
                           active:bg-[#fdf7ed]
                           focus-visible:ring-2 focus-visible:ring-[#C6912B]
                           transition"
                            >
                                Abonare
                            </Link>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="max-w-2xl mx-auto md:mx-0 w-full">
                        <YouTubeLite
                            id="GtjDuK2lxjI"
                            title="TofanConsult Video"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
