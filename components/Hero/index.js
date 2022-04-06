import Link from "next/link";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

function Hero({ home }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="content_title">
            <p>Înainte de toate priveste acest video.</p>
            <span>
              Consultanta transparenta și independenta în limba Română!
            </span>
            <Link href="#contact" passHref>
              <button className="btn_primery">Consultatie</button>
            </Link>
          </div>
          <motion.div
            className="video_ytube"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ delay: 0.2 }}
          >
            <ReactPlayer
              url={home.data.youtube_video.embed_url}
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
