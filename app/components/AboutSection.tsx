export default function AboutSection() {
    return (
        <section id="about" className="bg-[#F5F7FA] py-16">
            <div className="container px-4">
                {/* Headline */}
                <div className="flex flex-col">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C3559]">
                        Tofan Consult
                    </h2>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0C3559]">
                        partenerul tău de încredere
                    </span>
                </div>

                {/* Copy */}
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#243442]">
                    <p>
                        Alege calitatea înainte de toate! Având libertatea de a
                        lucra cu peste{" "}
                        <strong>350 de companii financiare</strong> din
                        Germania, biroul nostru de consultanță te poate ajuta pe
                        tine să găsești asigurările, creditele și produsele
                        financiare de care ai cu adevărat nevoie.
                    </p>
                    <p>
                        Interesul tău este mereu o prioritate pentru noi, de
                        aceea oferim transparență, independență și excelență în
                        consultanță.
                    </p>
                </div>

                {/* Bullets */}
                <div className="mt-6">
                    <ul className="space-y-3">
                        {[
                            "Transparență și independență",
                            "Acces la peste 350 de parteneri financiari și de asigurări",
                            "Soluții adaptate nevoilor tale",
                        ].map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-3 text-[#0C3559]"
                            >
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0C3559]/10 ring-1 ring-[#0C3559]/20">
                                    ✓
                                </span>
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mini-stats */}
                <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
                    <div className="rounded-lg bg-white px-4 py-3 text-center ring-1 ring-gray-200 shadow-sm">
                        <div className="text-2xl font-extrabold text-[#0C3559]">
                            350+
                        </div>
                        <div className="text-xs text-gray-500">Parteneri</div>
                    </div>
                    <div className="rounded-lg bg-white px-4 py-3 text-center ring-1 ring-gray-200 shadow-sm">
                        <div className="text-2xl font-extrabold text-[#0C3559]">
                            15k+
                        </div>
                        <div className="text-xs text-gray-500">Consultanțe</div>
                    </div>
                    <div className="rounded-lg bg-white px-4 py-3 text-center ring-1 ring-gray-200 shadow-sm">
                        <div className="text-2xl font-extrabold text-[#0C3559]">
                            4.9★
                        </div>
                        <div className="text-xs text-gray-500">Satisfacție</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
