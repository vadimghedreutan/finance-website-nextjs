import Head from "next/head";

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="description" content={description} />
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
      <meta property="og:description" content={description} />
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
  );
};

export default Seo;
