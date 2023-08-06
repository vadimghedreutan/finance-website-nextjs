import { AnimatePresence } from "framer-motion";

import "../styles/main.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
