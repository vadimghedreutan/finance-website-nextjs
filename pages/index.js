import Hero from "../components/Hero";
import InsuranceCards from "../components/InsuranceCards";
import About from "../components/About";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

import { client } from "../prismic-configuration";

export default function Home({ home }) {
  return (
    <Layout>
      <Hero home={home} />
      <main>
        <InsuranceCards />
        <About />
        <Team />
        <Reviews />
        <Contact />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const home = await client.getSingle("home");

  return {
    props: {
      home,
    },
    revalidate: 60,
  };
}
