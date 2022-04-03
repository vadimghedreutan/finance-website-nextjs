import Link from "next/link";

function InsuranceCards() {
  return (
    <section className="cards" id="cards">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <Link href="/service-one">
            <a>
              <div className="card">
                <i className="fas fa-solid fa-heart"></i>
                <h1>Service One</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-two">
            <a>
              <div className="card">
                <i className="fas fa-solid fa-heart"></i>
                <h1>Service two</h1>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InsuranceCards;
