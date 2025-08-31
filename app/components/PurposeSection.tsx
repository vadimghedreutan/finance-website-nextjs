export default function PurposeSection() {
    return (
        <section className="bg-[#0C3559] py-16">
            <div className="container px-4">
                <div className="grid items-center gap-10 md:grid-cols-[420px_1fr]">
                    {/* Portrait */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative">
                            {/* outer soft halo */}
                            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white/5 blur-xl" />
                            <img
                                src="/nelu-tofan.jpg" /* put your image in public/images */
                                alt="Nelu Tofan"
                                className="h-[340px] w-[340px] rounded-full object-cover ring-4 ring-white/70 shadow-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="text-white">
                        <p className="text-xs font-semibold tracking-wider text-[#C6912B] uppercase">
                            Scopul nostru
                        </p>

                        <blockquote className="mt-3">
                            <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                                Care este scopul nostru?
                            </h3>
                            <p className="mt-4 text-xl sm:text-[22px] leading-relaxed text-white/90">
                                Zâmbetul clientului care ne mulțumește pentru
                                colaborare!
                            </p>
                        </blockquote>

                        <footer className="mt-6 text-white/80">
                            <span className="font-semibold">Nelu Tofan</span>{" "}
                            <span className="text-white/60">
                                – Cofondator Tofan Consult
                            </span>
                        </footer>
                    </div>
                </div>
            </div>

            {/* subtle bottom divider */}
            <div className="mt-12 h-px w-full bg-white/10" />
        </section>
    )
}
