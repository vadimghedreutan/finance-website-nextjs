import Image from 'next/image'
import CheckBg from '../../images/check.svg'

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div className="about_content">
            <span>WELLCOME</span>
            <h1>We Are An Insurance Company That Cares.</h1>
            <p>
              We’re proud to support a diverse customer base, often insuring
              people turned away elsewhere. We do this by using technology to
              your advantage, not ours. We’re proud to support a diverse
              customer base, often insuring people turned away elsewhere. We do
              this by using technology to your advantage, not ours.
            </p>
          </div>
          <div className="about_img">
            <Image src={CheckBg} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
