import Image from 'next/image'
import Link from 'next/link'

import PaperPlane from '../images/paper-plane.svg'

function Success() {
  return (
    <section>
      <div className="container">
        <div className="success">
          <div className="success_title">
            <h1>Thank You!</h1>
            <p>
              Your email has been sent. We'll get back to you shortly. In the
              meantime check out
              <a href="#"> our book</a>
            </p>
            <Link href="/" passHref>
              <button className="btn_primery">Go back to home page</button>
            </Link>
          </div>
          <div className="success_img">
            <Image src={PaperPlane} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Success
