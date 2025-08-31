import Link from "next/link"
import { getInsurancePosts } from "@/lib/asigurari"

export default function InsuranceSidebar({
    currentSlug,
}: {
    currentSlug: string
}) {
    const posts = getInsurancePosts()

    return (
        <nav className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 lg:sticky lg:top-24">
            <h2 className="px-2 pb-3 text-sm font-semibold tracking-wide text-[#0C3559]">
                Insurance types
            </h2>
            <ul className="space-y-1">
                {posts.map((p) => {
                    const active = p.slug === currentSlug
                    return (
                        <li key={p.slug}>
                            <Link
                                href={`/asigurari/${p.slug}`}
                                className={[
                                    "block rounded-lg px-3 py-2 text-sm transition",
                                    active
                                        ? "bg-[#fdf7ed] text-[#C6912B] ring-1 ring-[#C6912B]"
                                        : "text-[#0C3559] hover:bg-gray-50 hover:text-[#C6912B]",
                                ].join(" ")}
                                aria-current={active ? "page" : undefined}
                            >
                                {p.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
