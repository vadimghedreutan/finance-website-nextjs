import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Credite from "../components/Insurances/Credite";
import Contact from "../components/Contact";
import { getPrismicClient } from "../services/prismic";

function ServiceTwoPage({ services }) {
  return (
    <>
      <Credite services={services} />
      <InsuranceCards />
      <Contact />
    </>
  );
}

export default ServiceTwoPage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const servicesResponse = await prismic.query([
    Prismic.Predicates.at("document.type", "service_two"),
  ]);

  const services = servicesResponse.results.map((article) => ({
    slug: article.uid,
    title: article.data.title,
  }));

  return {
    props: {
      services,
    },
    revalidate: 60,
  };
};
