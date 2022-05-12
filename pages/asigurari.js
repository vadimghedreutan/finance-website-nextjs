import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Asigurari from "../components/Insurances/Asigurari";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { getPrismicClient } from "../services/prismic";

function ServiceOnePage({ services }) {
  return (
    <div className="wrapper">
      <Seo
        title="TofanConsult | Asigurari"
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />
      <Header />
      <main>
        <Asigurari services={services} />
        <InsuranceCards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default ServiceOnePage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const servicesResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "service_one")],
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
