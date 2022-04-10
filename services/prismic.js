import Prismic from "@prismicio/client";

export function getPrismicClient(req) {
  const prismic = Prismic.client(process.env.PRISMIC_URL, {
    req,
    accessToken: process.env.PRISMIC_TOKEN,
  });

  return prismic;
}
