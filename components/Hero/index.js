import Link from 'next/link'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
}
let easing = [0.2, 0.8, 0.2, 1]

function Hero({ home }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="content_title">
            <motion.p
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ ease: easing, duration: 2, delay: 0.2 }}
            >
              ASIGURAREA CORECTĂ PENTRU TINE.
            </motion.p>
            <motion.span
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ ease: easing, duration: 2, delay: 0.4 }}
            >
              We’ve Got You Covered Every Day And When It Matters Most.
            </motion.span>
            <Link href="#contact" passHref>
              <motion.button
                className="btn_primery"
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ delay: 0.6 }}
              >
                Consultatie
              </motion.button>
            </Link>
          </div>
          <div className="video_ytube">
            <ReactPlayer
              url={home.data.youtube_video.embed_url}
              className="video_ytube__player"
              width="100%"
              height="100%"
            />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
