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
              <h1>Mulțumim!</h1>
              <p>
                Cererea dumneavoastră a fost trimisă. În scurt timp echipa
                noastră vă va contacta pentru mai multe detalii. Pentru a afla
                cele mai noi informații legate de viața și integrarea în
                Germania nu uita să te abonezi aici!
              </p>
              <Link href="/abonare" passHref>
                <button className="btn_primery">Abonare</button>
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
