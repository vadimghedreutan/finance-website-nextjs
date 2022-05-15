import Link from "next/link";
import ReactPlayer from "react-player/lazy";
import { RichText } from "prismic-reactjs";
import { motion } from "framer-motion";

function Hero({ home }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="content_title">
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 2, delay: 0.1 }}
            >
              {RichText.asText(home.title)}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {RichText.asText(home.description)}
            </h1>
            <div className="flex items-center gap-2">
              <Link href="#contact" passHref>
                <button className="btn_primery">Consultatie</button>
              </Link>
              <Link href="/abonare" passHref>
                <button className="btn_primery">Abonare</button>
              </Link>
            </div>
          </div>
          <motion.div
            className="video_ytube"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 2, delay: 0.4 }}
          >
            <ReactPlayer
              url={home.youtube_video.embed_url}
              className="video_ytube__player"
              width="100%"
              height="100%"
            />
            <div className="overlay"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
