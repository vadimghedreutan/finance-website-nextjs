"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Icon components with proper TypeScript typing
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const PhoneIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

// Constants for better maintainability
const PHONE_NUMBER = "+49 178 309 6185";
const PHONE_HREF = "tel:00491783096185";

// Navigation items configuration
const NAVIGATION_ITEMS = [
  { href: "/#cards", label: "Servicii" },
  { href: "/#about", label: "Despre Noi" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 z-50 bg-white shadow-sm">
      <nav className="navigation" aria-label="Main navigation">
        <div className="navigation__container">
          {/* Logo and Mobile Controls */}
          <div className="logo">
            <Link href="/" onClick={closeNavbar} aria-label="Go to homepage">
              <Image
                src="/logo.jpg"
                width={120}
                height={72}
                alt="TofanConsult logo"
                priority
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="btn_mobile"
              aria-label="Toggle navigation menu"
              aria-expanded={isNavbarOpen}
              aria-controls="navigation-menu"
              type="button"
              onClick={toggleNavbar}
            >
              <MenuIcon />
            </button>

            {/* Mobile Phone Icon */}
            <div className="mobile_phone">
              <a
                href={PHONE_HREF}
                aria-label={`Call ${PHONE_NUMBER}`}
                className="flex items-center justify-center"
              >
                <PhoneIcon className="h-7" />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <div
            id="navigation-menu"
            className={`lg:flex flex-grow items-center ${
              isNavbarOpen ? "flex" : "hidden"
            }`}
            onClick={closeNavbar}
          >
            <ul className="navigation__list" role="menubar">
              {NAVIGATION_ITEMS.map(({ href, label }) => (
                <li key={href} role="none">
                  <Link
                    href={href}
                    role="menuitem"
                    className="block px-3 py-2 text-black font-bold hover:text-clr-primery transition-colors"
                    onClick={closeNavbar}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Phone Number in Navigation */}
              <li className="phone" role="none">
                <a
                  href={PHONE_HREF}
                  role="menuitem"
                  className="flex items-center px-3 py-2 text-black font-bold hover:text-clr-primery transition-colors"
                  aria-label={`Call ${PHONE_NUMBER}`}
                >
                  <PhoneIcon className="h-6 mr-2" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
