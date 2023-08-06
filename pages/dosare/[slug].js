import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import Loading from "../../components/Loading";

import htmlSerializer from "../../utils/htmlSerializer";
import { getPrismicClient } from "../../services/prismic";
import Seo from "../../components/Seo";

export default function ServiceSix({ service }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Seo
        title={`TofanConsult | ${RichText.asText(service?.title)}`}
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />

      <article>
        <div className="container">
          <div className="article">
            <motion.div
              className="article__title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2, delay: 0.1 }}
            >
              <h1>{RichText.asText(service?.title)}</h1>
            </motion.div>
            <motion.div
              className="pb-2"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2, delay: 0.3 }}
            >
              <Link href="/#contact" passHref>
                <button className="btn_primery">Vreau o programare</button>
              </Link>
            </motion.div>
            <div className="article__content">
              <RichText
                render={service?.content}
                htmlSerializer={htmlSerializer}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();
  const services = await prismic.query([
    Prismic.Predicates.at("document.type", "service_six"),
  ]);

  const paths = services.results.map((article) => ({
    params: {
      slug: article.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const servicesResponse = await prismic.getByUID("service_six", slug);

  if (!servicesResponse) {
    return {
      notFound: true,
    };
  }

  const service = {
    slug: servicesResponse.uid,
    title: servicesResponse.data.title,
    content: servicesResponse.data.content,
  };

  return {
    props: {
      service,
    },
    revalidate: 60,
  };
};
