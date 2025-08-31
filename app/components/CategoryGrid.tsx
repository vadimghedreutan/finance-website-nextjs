import Link from "next/link"

type Item = {
    href: string
    title: string
    subtitle?: string
    icon?: React.ReactNode
}

export default function CategoryGrid({ items }: { items: Item[] }) {
    return (
        <div className="container px-4 py-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                {items.map((c) => (
                    <Link
                        key={c.title}
                        href={c.href}
                        className="group flex h-full flex-col justify-between rounded-xl bg-white p-6 shadow-sm 
                 ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg hover:ring-[#C6912B]"
                    >
                        <div className="flex items-center gap-4">
                            {c.icon && (
                                <div className="shrink-0 text-[#0C3559] group-hover:text-[#C6912B] transition-colors">
                                    {c.icon}
                                </div>
                            )}
                            <div>
                                <h3 className="text-lg font-semibold text-[#0C3559] group-hover:text-[#C6912B] transition-colors">
                                    {c.title}
                                </h3>
                                {c.subtitle && (
                                    <p className="mt-1 text-sm text-gray-500">
                                        {c.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
