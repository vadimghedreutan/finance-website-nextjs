import Hero from '../components/Hero'
import InsuranceCards from '../components/InsuranceCards'
import About from '../components/About'
import Team from '../components/Team'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

import Prismic from 'prismic-javascript'
import { client } from '../prismic-configuration'

export default function Home({ home, insurances }) {
  return (
    <Layout>
      <Hero home={home} />
      <main>
        <InsuranceCards insurances={insurances} />
        <About />
        <Team />
        <Reviews />
        <Contact />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const home = await client.getSingle('home')
  const data = await client.query(
    Prismic.Predicates.at('document.type', 'insurance')
    // { orderings: "[my.post.date desc]" }
  )

  return {
    props: {
      home,
      insurances: data,
    },
    revalidate: 60,
  }
}
