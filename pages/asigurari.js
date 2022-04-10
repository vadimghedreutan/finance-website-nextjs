import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Asigurari from "../components/Insurances/Asigurari";
import Contact from "../components/Contact";
import { getPrismicClient } from "../services/prismic";

function ServiceOnePage({ services }) {
  return (
    <>
      <Asigurari services={services} />
      <InsuranceCards />
      <Contact />
    </>
  );
}

export default ServiceOnePage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const servicesResponse = await prismic.query([
    Prismic.Predicates.at("document.type", "service_one"),
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
