import { MDXRemote } from "next-mdx-remote/rsc"
import { getDosareBySlug, getDosarePosts } from "@/lib/dosare"
import Link from "next/link"
// If you added the CTA/FAQ section earlier:
import { AfterListSection } from "../../components/AfterListSection"
import VideoPlayer from "@/app/components/VideoPlayer"

type RouteParams = { slug: string }
type Props = { params: Promise<RouteParams> }

export default async function InvestmentDetailsPage({ params }: Props) {
    const { slug } = await params
    const { content, data } = await getDosareBySlug(slug)

    return (
        <section className="bg-gray-50 py-12 sm:py-16">
            <div className="container px-4">
                {/* Breadcrumb (mobile-friendly) */}
                <div className="mb-6 text-sm">
                    <Link
                        href="/dosare"
                        className="text-[#0C3559] hover:text-[#C6912B] font-bold"
                    >
                        Dosare
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-600">{data.title}</span>
                </div>

                <div>
                    {/* Content */}
                    <div>
                        <header className="mb-8">
                            <h1 className="mt-2 text-3xl sm:text-4xl font-bold font-roboto text-[#0C3559]">
                                {data.title}
                            </h1>
                            {data.excerpt && (
                                <p className="mt-3 text-lg text-gray-600">
                                    {data.excerpt}
                                </p>
                            )}
                        </header>

                        <article className="prose prose-lg prose-slate max-w-none">
                            <MDXRemote
                                source={content}
                                components={{ VideoPlayer }}
                            />
                        </article>

                        {/* CTA + Benefits + FAQ */}
                        <div className="mt-14">
                            <AfterListSection />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* Static generation helpers (recommended) */
export function generateStaticParams() {
    return getDosarePosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const { data } = await getDosareBySlug(slug)
    return {
        title: data?.title ? `${data.title} | Dosare` : "Dosare",
        description: data?.excerpt ?? "Dosare details",
    }
}
