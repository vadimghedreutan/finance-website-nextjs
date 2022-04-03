import Link from "next/link";
import { RichText } from "prismic-reactjs";

function InsuranceCards({ insurances }) {
  return (
    <section className="cards" id="cards">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {insurances.results.map((article) => {
            return (
              <Link
                href="asigurari/[id]"
                as={`/asigurari/${article.uid}`}
                key={article.uid}
              >
                <a>
                  <div className="card">
                    <i className={RichText.asText(article.data.icon)}></i>
                    <h1>{RichText.asText(article.data.title)}</h1>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InsuranceCards;
