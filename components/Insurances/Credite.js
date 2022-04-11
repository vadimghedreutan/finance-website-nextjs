import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const Credite = ({ services }) => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-2">
          <div>
            {services?.map((article) => {
              return (
                <Link href={`/credite/${article.slug}`} key={article.slug}>
                  <a>
                    <div className="tabs_cards">
                      <h1>{RichText.asText(article.title)}</h1>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="pl-2 flex justify-center items-center">
            <div className="hidden md:inline-flex">
              <Image
                src="/svg/undraw_transfer_money_rywa.svg"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credite;
