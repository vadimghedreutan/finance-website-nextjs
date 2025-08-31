import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../styles/main.scss";
import CookieBanner from "./components/CookieBanner";
import ChatWidget from "./components/ChatWidget";
import { unstable_ViewTransition as ViewTransition } from "react";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "700"], // Light + Bold
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tofanconsult.de"),
  title: {
    default: "TofanConsult | Excelență în Consultanță",
    template: "%s | TofanConsult",
  },
  description:
    "Integrare in Germania, bancă, asigurare, traducere, online, offline, programare, auto, copii, viitor, prosper , consult, fg-Finanz, investiție , imobil, credit, finanțe , condiții , Germania , noutăți , protecție , cont bancar, daune, despăgubire , Kindergeld, Elterngeld , Wohngeld, colaborare la distanță , cont de economii, beneficii, bausparvertrag, Minijob, taxa-tv-radio, clasa de impozitare , gaz, curent, Gewerbe , Anmeldung , Abmeldung , salariu, venit, impozite, taxe, finanțe , Finanzamt , pensie, ajutor, stat German, bani. Netto , brutto, scop, romani , moldoveni , consultanță, familie , economisi, gratuit, simplu , servicii, asigurarea medicală, asigurarea auto, asigurarea imobiliară, asigurarea de răspundere Civilă, asigurarea de avocat , asigurarea de accident, asigurarea de viața , asigurarea de Dinți , asigurări pentru firma, credite de nevoi personale , credite auto , Finanțări imobiliare, investiții in Germania , cont de economii pentru copii, pensie privată , aur, metalele prețioase , fonduri alternative",
  keywords: [
    "Integrare in Germania",
    "bancă",
    "asigurare",
    "traducere",
    "auto",
    "copii",
    "Finanțări imobiliare",
    "credit",
    "pensie",
    "consultanță",
    "romani",
    "moldoveni",
    "etc.",
  ],
  openGraph: {
    title: "TofanConsult | Excelență în Consultanță",
    description:
      "Integrare în Germania, consultanță financiară, asigurări și credite pentru români și moldoveni.",
    url: "https://tofanconsult.de",
    siteName: "TofanConsult",
    images: [
      {
        url: "/logo-meta.png",
        secureUrl: "/logo-meta.png",
        width: 1200,
        height: 630,
        alt: "TofanConsult Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TofanConsult | Excelență în Consultanță",
    description:
      "Integrare în Germania, consultanță financiară, asigurări și credite pentru români și moldoveni.",
    images: ["/logo-meta.png"],
  },
  icons: {
    icon: [
      {
        url: "/fav/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/fav/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/fav/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // 👈 this outputs user-scalable=no
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const consent = (await cookies()).get("site_consent")?.value as
    | "granted"
    | "denied"
    | undefined;
  return (
    <html lang="en" className={`${roboto.variable} scroll-smooth`}>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <ViewTransition>{children}</ViewTransition>
          </main>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
        <CookieBanner initialConsent={consent} />
        <ChatWidget load={true} />
      </body>
    </html>
  );
}
