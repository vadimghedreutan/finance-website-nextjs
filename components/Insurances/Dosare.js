import Link from "next/link";
import { RichText } from "prismic-reactjs";

const Dosare = ({ services }) => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-2">
          <div>
            {services?.map((article) => {
              return (
                <Link href={`/dosare/${article.slug}`} key={article.slug}>
                  <a>
                    <div className="tabs_cards">
                      <h1>{RichText.asText(article.title)}</h1>
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
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
  );
};

export default Dosare;
