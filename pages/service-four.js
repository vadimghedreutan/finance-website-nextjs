import Link from "next/link";
import { RichText } from "prismic-reactjs";

import { client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";

function ServiceFourCard({ service_four }) {
  return (
    <>
      <InsuranceCards />
      <section>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              {service_four.results.map((article) => {
                return (
                  <Link
                    href="services-four/[id]"
                    as={`/services-four/${article.uid}`}
                    key={article.uid}
                  >
                    <a>
                      <div className="tabs_cards">
                        <h1>{RichText.asText(article.data.title)}</h1>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className="pl-2">
              <h2 className="font-medium text-lg">What is Lorem Ipsum?</h2>
              <p>
                <strong>
                  Posibilitățile pe care ți le oferă PB Finanz Service
                </strong>
                sunt mult mai multe și personalizate. Vrem să îți cunoaștem
                necesitățile pentru a-ți oferi consultanță și soluții pe
                potrivă. Totodată, dacă practici o formă de antreprenoriat, ca
                și persoană juridică, ai parte de o ofertă și mai extinsă
                incluzând consiliere financiară, asigurări necesare și strategii
                fiabile pentru economisirea banilor din impozitul pe venit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default ServiceFourCard;

export async function getStaticProps() {
  const data = await client.query(
    Prismic.Predicates.at("document.type", "service_four")
  );

  return {
    props: {
      service_four: data,
    },
    revalidate: 60,
  };
}
