export default function Footer() {
    return (
        <footer className="bg-[#0C3559] pt-12">
            <div className="container px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-white/80">
                {/* Left side */}
                <p className="flex items-center gap-2">
                    <span>© 2025 All rights reserved</span>
                    <span className="hidden sm:inline">
                        — Created by{" "}
                        <a
                            href="https://www.vadimghedreutan.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white cursor-pointer hover:text-[#C6912B] transition-colors underline"
                        >
                            VG
                        </a>
                    </span>
                </p>

                {/* Center on mobile */}
                <div className="mt-2 sm:hidden">
                    Created by{" "}
                    <a
                        href="https://www.vadimghedreutan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white cursor-pointer hover:text-[#C6912B] transition-colors underline"
                    >
                        VG
                    </a>
                </div>

                {/* Right side */}
                <a
                    href="/privacy-policy"
                    className="mt-2 sm:mt-0 hover:text-[#C6912B] transition"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}
