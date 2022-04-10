import Hero from "../components/Hero";
import InsuranceCards from "../components/InsuranceCards";
import About from "../components/About";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import { getPrismicClient } from "../services/prismic";

export default function Home({ home }) {
  return (
    <Layout>
      <Hero home={home} />
      <main>
        <InsuranceCards />
        <About home={home} />
        <Team home={home} />
        <Reviews />
        <Contact />
      </main>
    </Layout>
  );
}

// FIXME: convert to arrow

export async function getStaticProps() {
  const prismic = getPrismicClient();

  const result = await prismic.getSingle("home");

  return {
    props: {
      home: result.data,
    },
    revalidate: 3600,
  };
}
