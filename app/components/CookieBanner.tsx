"use client";

import { useEffect, useState } from "react";

type Props = {
  initialConsent?: "granted" | "denied" | undefined;
};

export default function CookieBanner({ initialConsent }: Props) {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check localStorage first, then fall back to server consent
    const localConsent = localStorage.getItem("cookie-consent");
    if (localConsent) {
      setShow(false);
    } else if (initialConsent) {
      // If server has consent but localStorage doesn't, sync them
      localStorage.setItem("cookie-consent", initialConsent);
      setShow(false);
    } else {
      // No consent anywhere, show banner
      setShow(true);
    }
  }, [initialConsent]);

  // Add/remove body class to prevent layout shift
  useEffect(() => {
    if (show) {
      document.body.classList.add("has-cookie-banner");
    } else {
      document.body.classList.remove("has-cookie-banner");
    }

    return () => {
      document.body.classList.remove("has-cookie-banner");
    };
  }, [show]);

  const setConsentCookie = (value: "granted" | "denied") => {
    // 180 days, secure, lax
    document.cookie = `site_consent=${value}; Max-Age=${
      60 * 60 * 24 * 180
    }; Path=/; SameSite=Lax; Secure`;
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "granted");
    setConsentCookie("granted");
    setShow(false);
    window.dispatchEvent(new Event("consent-updated"));
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "denied");
    setConsentCookie("denied");
    setShow(false);
    window.dispatchEvent(new Event("consent-updated"));
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted || !show) return null;

  return (
    <div
      role="dialog"
      aria-label="Acord pentru cookie-uri"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#034A75] text-white p-4 shadow-lg"
    >
      <div
        className="
      container mx-auto flex flex-col-reverse gap-4
      md:flex-row-reverse md:items-center md:justify-between
    "
      >
        {/* Text block */}
        <div className="text-sm text-center md:text-right">
          Pentru a oferi o experiență optimă, folosim cookie-uri esențiale și,
          cu acordul dvs., cookie-uri analitice.{" "}
          <a
            href="/privacy-policy"
            className="underline ml-1 hover:text-[#C6912B] transition-colors"
          >
            Află mai multe
          </a>
        </div>

        {/* Buttons block */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
          <button
            onClick={handleDecline}
            className="bg-white text-[#034A75] py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Doar necesare
          </button>
          <button
            onClick={handleAccept}
            className="bg-[#C6912B] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-[#B58326] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
