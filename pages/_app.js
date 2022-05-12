import { AnimatePresence } from "framer-motion";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import "../styles/main.scss";

const progress = new ProgressBar({
  size: 4,
  color: "#C98C48",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
