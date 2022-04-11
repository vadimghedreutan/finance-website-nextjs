import Hero from "../components/Hero";
import InsuranceCards from "../components/InsuranceCards";
import About from "../components/About";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";

export default function Home({ home, comments }) {
  return (
    <Layout>
      <Hero home={home} />
      <main>
        <InsuranceCards />
        <About home={home} />
        <Team home={home} />
        <Reviews comments={comments} />
        <Contact />
      </main>
    </Layout>
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
