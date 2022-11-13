import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";
import { getPrismicClient } from "../services/prismic";
import Imobil from "../components/Insurances/Imobil";
import Seo from "../components/Seo";

function ServiceFivePage({ services }) {
  return (
    <>
      <Seo
        title="TofanConsult | Procurarea locuintei"
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />

      <Imobil services={services} />
      <InsuranceCards />
      <Contact />
    </>
  );
}

export default ServiceFivePage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const servicesResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "service_five")],
    { orderings: "[document.last_publication_date desc]" }
  );

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
