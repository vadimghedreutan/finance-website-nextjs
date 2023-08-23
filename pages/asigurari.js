import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Asigurari from "../components/Insurances/Asigurari";
import Contact from "../components/Contact";
import Seo from "../components/Seo";
import { getPrismicClient } from "../services/prismic";
import Link from "next/link";

function ServiceOnePage({ services }) {
  return (
    <>
      <Seo
        title="TofanConsult | Asigurari"
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />

      <Asigurari services={services} />

      <div className="px-6">
        <div className="container">
          <Link href="/car-insurance">
            <div className="md:w-1/2">
              <div className="tabs_cards">
                <h1>Asigurarea auto</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <InsuranceCards />
      <Contact />
    </>
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
