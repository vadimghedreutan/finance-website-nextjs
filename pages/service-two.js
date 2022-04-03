import Link from "next/link";
import { RichText } from "prismic-reactjs";

import { client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";

function ServiceTwoCard({ service_two }) {
  return (
    <>
      <InsuranceCards />
      <section>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              {service_two.results.map((article) => {
                return (
                  <Link
                    href="services-two/[id]"
                    as={`/services-two/${article.uid}`}
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
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default ServiceTwoCard;

export async function getStaticProps() {
  const data = await client.query(
    Prismic.Predicates.at("document.type", "service_two")
  );

  return {
    props: {
      service_two: data,
    },
    revalidate: 60,
  };
}
