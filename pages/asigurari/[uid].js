import { client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { motion } from 'framer-motion'

import htmlSerializer from '../../utils/htmlSerializer'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Insurance({ data }) {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'spring', duration: 2 }}
    >
      <div className="container">
        <div className="article">
          <div className="article__title">
            <h1>{RichText.asText(data.title)}</h1>
          </div>
          <div className="article__content">
            <RichText render={data.content} htmlSerializer={htmlSerializer} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export async function getStaticProps({ params }) {
  const { uid } = params
  const { data } = await client.getByUID('insurance', uid)

  return {
    props: { data },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'insurance')
  )

  const paths = results.map((article) => ({
    params: {
      uid: article.uid,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
