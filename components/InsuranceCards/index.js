import Link from "next/link";
import {
  FaUsers,
  FaClinicMedical,
  FaHome,
  FaHeart,
  FaUserShield,
  FaWallet,
} from "react-icons/fa";

function InsuranceCards() {
  return (
    <section className="cards" id="cards">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <Link href="/service-one">
            <a>
              <div className="card">
                <FaUsers className="h-8 w-8 text-[#02b1f8]" />
                <h1>Service One</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-two">
            <a>
              <div className="card">
                <FaClinicMedical className="h-8 w-8 text-[#02b1f8]" />
                <h1>Service two</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-three">
            <a>
              <div className="card">
                <FaHome className="h-8 w-8 text-[#02b1f8]" />
                <h1>Service three</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-four">
            <a>
              <div className="card">
                <FaHeart className="h-8 w-8 text-[#02b1f8]" />
                <h1>Service four</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-five">
            <a>
              <div className="card">
                <FaUserShield className="h-8 w-8 text-[#02b1f8]" />
                <h1>Service five</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-six">
            <a>
              <div className="card">
                <FaWallet className="h-8 w-8 text-[#02b1f8]" />
                <h1>Service six</h1>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InsuranceCards;
