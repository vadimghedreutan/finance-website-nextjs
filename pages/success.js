import Image from "next/image";
import Link from "next/link";
import InsuranceCards from "../components/InsuranceCards";

function Success() {
  return (
    <>
      <section className="grid place-content-center">
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
              <Image src="/svg/paper-plane.svg" width="600" height="400" />
            </div>
          </div>
        </div>
      </section>
      <InsuranceCards />
    </>
  );
}

export default Success;
