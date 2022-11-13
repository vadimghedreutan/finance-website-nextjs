import InsuranceCards from "../components/InsuranceCards";
import Credite from "../components/Insurances/Credite";
import Contact from "../components/Contact";
import Seo from "../components/Seo";

function ServiceTwoPage() {
  return (
    <>
      <Seo
        title="TofanConsult | Credite"
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />
      <Credite />
      <InsuranceCards />
      <Contact />
    </>
  );
}

export default ServiceTwoPage;
