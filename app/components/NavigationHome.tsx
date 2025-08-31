import Link from "next/link"

export default function NavigationHome() {
    return (
        <div>
            <div className="mb-6 flex justify-start">
                <Link
                    href="/#cards"
                    className="inline-flex items-center gap-2 text-[#0C3559] hover:text-[#C6912B] transition-colors duration-200 group"
                >
                    <svg
                        className="w-5 h-5 transform transition-transform group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    <span className="text-sm font-medium">
                        Înapoi la pagina principală
                    </span>
                </Link>
            </div>
        </div>
    )
}
