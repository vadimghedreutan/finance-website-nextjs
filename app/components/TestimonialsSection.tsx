import { testimonials } from "@/data/testimonials"

export default function TestimonialsSection() {
    return (
        <section className="bg-[#0C3559] py-8 sm:py-16">
            <div className="container px-4">
                <div className="flex items-center justify-center sm:justify-start mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Ce spun oamenii despre noi
                    </h2>
                </div>

                {/* Horizontal scrolling testimonials */}
                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-80 sm:w-96 snap-start"
                        >
                            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                                <blockquote className="text-md leading-relaxed text-gray-800 mb-4">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <cite className="block font-bold italic text-[#0C3559] pt-8">
                                    – {t.name}
                                </cite>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
