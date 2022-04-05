import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faHouse,
  faMoneyBillAlt,
  faCarCrash,
  faBank,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

function InsuranceCards() {
  return (
    <section className="cards" id="cards">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <Link href="/service-one">
            <a>
              <div className="card">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="h-8 w-8 text-[#02b1f8]"
                />
                <h1>Service One</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-two">
            <a>
              <div className="card">
                <FontAwesomeIcon
                  icon={faHouse}
                  className="h-8 w-8 text-[#02b1f8]"
                />
                <h1>Service two</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-three">
            <a>
              <div className="card">
                <FontAwesomeIcon
                  icon={faMoneyBillAlt}
                  className="h-8 w-8 text-[#02b1f8]"
                />
                <h1>Service three</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-four">
            <a>
              <div className="card">
                <FontAwesomeIcon
                  icon={faCarCrash}
                  className="h-8 w-8 text-[#02b1f8]"
                />
                <h1>Service four</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-five">
            <a>
              <div className="card">
                <FontAwesomeIcon
                  icon={faBank}
                  className="h-8 w-8 text-[#02b1f8]"
                />
                <h1>Service five</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-six">
            <a>
              <div className="card">
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  className="h-8 w-8 text-[#02b1f8]"
                />
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
