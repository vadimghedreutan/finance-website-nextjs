import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";
import { getPrismicClient } from "../services/prismic";
import CurentGas from "../components/Insurances/CurentGas";

function ServiceThreePage({ services }) {
  return (
    <>
      <CurentGas services={services} />
      <InsuranceCards />
      <Contact />
    </>
  );
}

export default ServiceThreePage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const servicesResponse = await prismic.query([
    Prismic.Predicates.at("document.type", "service_three"),
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
