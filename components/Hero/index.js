import Link from 'next/link'
import ReactPlayer from 'react-player'

function Hero({ home }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="content_title">
            <p>ASIGURAREA CORECTĂ PENTRU TINE.</p>
            <span>
              We’ve Got You Covered Every Day And When It Matters Most.
            </span>
            <Link href="#contact" passHref>
              <button className="btn_primery">Consultatie</button>
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
