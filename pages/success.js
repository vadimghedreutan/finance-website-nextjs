import Image from "next/image";
import Link from "next/link";
import InsuranceCards from "../components/InsuranceCards";
import Seo from "../components/Seo";
import Contact from "../components/Contact";

function Success() {
  return (
    <>
      <Seo
        title="TofanConsult | Abonare"
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />

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
              <Link href="/abonare">
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
      <Contact />
    </>
  );
}

export default Success;
