import Iframe from "react-iframe";

const Credite = () => {
  return (
    <section>
      <div className="container">
        <div className="iframe-wrapper">
          <Iframe
            src="https://www.procheck24.de/einsurance/csp/doHomepageEntry.do?cspident=93A936F88085A69ECC42FC1AE4A00151&p=1"
            id="kredit_frame"
            className="iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default Credite;
