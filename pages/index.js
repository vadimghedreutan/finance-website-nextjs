import Hero from "../components/Hero";
import InsuranceCards from "../components/InsuranceCards";
import About from "../components/About";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";
import Seo from "../components/Seo";

export default function Home({ home, comments }) {
  return (
    <div className="wrapper">
      <Seo
        title="TofanConsult | Excelență în Consultanță"
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />
      <Header />
      <Hero home={home} />
      <main>
        <InsuranceCards />
        <About home={home} />
        <Team home={home} />
        <Reviews comments={comments} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const result = await prismic.getSingle("home");

  const commentsResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "comments")],
    { orderings: "[document.last_publication_date desc]" }
  );

  const comments = commentsResponse.results.map((comment) => ({
    slug: comment.uid,
    description: comment.data.description,
    name: comment.data.name,
  }));

  return {
    props: {
      home: result.data,
      comments,
    },
    revalidate: 3600,
  };
};
