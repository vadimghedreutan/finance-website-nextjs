import Link from "next/link";
import { RichText } from "prismic-reactjs";

import { client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";

function ServiceFiveCard({ service_five }) {
  return (
    <>
      <InsuranceCards />
      <section>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              {service_five.results.map((article) => {
                return (
                  <Link
                    href="services-five/[id]"
                    as={`/services-five/${article.uid}`}
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
              <span className="font-medium text-lg">
                What is Lorem Ipsum? is Lorem Ipsum In?
              </span>
              <p>
                <h2 className="font-medium text-lg text-gray-700">
                  Posibilitățile pe care ți le oferă PB Finanz Service
                </h2>
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

export default ServiceFiveCard;

export async function getStaticProps() {
  const data = await client.query(
    Prismic.Predicates.at("document.type", "service_five")
  );

  return {
    props: {
      service_five: data,
    },
    revalidate: 60,
  };
}
