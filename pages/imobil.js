import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";
import { getPrismicClient } from "../services/prismic";
import Imobil from "../components/Insurances/Imobil";

function ServiceFivePage({ services }) {
  return (
    <>
      <Imobil services={services} />
      <InsuranceCards />
      <Contact />
    </>
  );
}

export default ServiceFivePage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const servicesResponse = await prismic.query([
    Prismic.Predicates.at("document.type", "service_five"),
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
