import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";
import { getPrismicClient } from "../services/prismic";
import Dosare from "../components/Insurances/Dosare";

function ServiceSixPage({ services }) {
  return (
    <>
      <Dosare services={services} />
      <InsuranceCards />
      <Contact />
    </>
  );
}

export default ServiceSixPage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const servicesResponse = await prismic.query([
    Prismic.Predicates.at("document.type", "service_six"),
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
