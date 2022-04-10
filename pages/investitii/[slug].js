import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import LoadingPage from "../../components/LoadingPage";

import htmlSerializer from "../../utils/htmlSerializer";
import { getPrismicClient } from "../../services/prismic";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function ServiceFour({ service }) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingPage />;
  }

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", duration: 2 }}
    >
      <div className="container">
        <div className="article">
          <div className="article__title">
            <h1>{RichText.asText(service?.title)}</h1>
          </div>
          <div className="article__content">
            <RichText
              render={service?.content}
              htmlSerializer={htmlSerializer}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();
  const services = await prismic.query([
    Prismic.Predicates.at("document.type", "service_four"),
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

  const servicesResponse = await prismic.getByUID("service_four", slug);

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
