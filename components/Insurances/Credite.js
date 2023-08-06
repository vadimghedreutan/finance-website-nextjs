import Iframe from "react-iframe";

const Credite = () => {
  return (
    <section>
      <div className="container">
        <Iframe
          src="https://www.procheck24.de/einsurance/csp/doHomepageEntry.do?cspident=93A936F88085A69ECC42FC1AE4A00151&p=1"
          id="kredit_frame"
          scrolling="no"
          width="100%"
          height="3300"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Credite;
