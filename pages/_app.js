import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import "../styles/main.scss";

const progress = new ProgressBar({
  size: 4,
  color: "#C98C48",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Head>
        <title>TofanConsult | Excelență în Consultanță</title>
        <meta
          name="description"
          content="Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
        />
        <meta
          name="keywords"
          content="Integrare in Germania, bancă, asigurare, traducere, online, offline, programare, auto, copii, viitor, prosper , consult, fg-Finanz, investiție , imobil, credit, finanțe , condiții , Germania , noutăți , protecție , cont bancar, daune, despăgubire , Kindergeld, Elterngeld , Wohngeld, colaborare la distanță , cont de economii, beneficii, bausparvertrag, Minijob, taxa-tv-radio, clasa de impozitare , gaz, curent, Gewerbe , Anmeldung , Abmeldung , salariu, venit, impozite, taxe, finanțe , Finanzamt , pensie, ajutor, stat German, bani. Netto , brutto, scop, romani , moldoveni , consultanță, familie , economisi, gratuit, simplu , servicii, asigurarea medicală, asigurarea auto, asigurarea imobiliară, asigurarea de răspundere Civilă, asigurarea de avocat , asigurarea de accident, asigurarea de viața , asigurarea de Dinți , asigurări pentru firma, credite de nevoi personale , credite auto , Finanțări imobiliare, investiții in Germania , cont de economii pentru copii, pensie privată , aur, metalele prețioase , fonduri alternative"
        />
        <meta
          property="og:title"
          content="TofanConsult | Excelență în Consultanță"
        />
        <meta property="og:image" content="/logo-meta.png" />
        <meta property="og:image:secure_url" content="/logo-meta.png" />
        <meta name="twitter:image" content="/logo-meta.png" />
        <meta name="twitter:image:src" content="/logo-meta.png" />

        <meta property="og:url" content="https://tofanconsult.de" />
        <meta property="og:type" content="site-ul web" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fav/favicon-16x16.png"
        />
      </Head>
      <Header />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;
