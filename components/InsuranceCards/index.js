import Link from "next/link";
import { FaHome, FaLightbulb, FaChartLine } from "react-icons/fa";
import { AiOutlineFileProtect, AiFillEuroCircle } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

function InsuranceCards() {
  return (
    <section className="cards" id="cards">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <Link href="/service-one">
            <a>
              <div className="card">
                <AiOutlineFileProtect className="h-8 w-8 text-[#02b1f8]" />
                <h1>Asigurări</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-two">
            <a>
              <div className="card">
                <AiFillEuroCircle className="h-8 w-8 text-[#02b1f8]" />
                <h1>Credite</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-three">
            <a>
              <div className="card">
                <FaLightbulb className="h-8 w-8 text-[#02b1f8]" />
                <h1>Curent/Gaz</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-four">
            <a>
              <div className="card">
                <FaChartLine className="h-8 w-8 text-[#02b1f8]" />
                <h1>Investiții</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-five">
            <a>
              <div className="card">
                <FaHome className="h-8 w-8 text-[#02b1f8]" />
                <h1>Procurarea locuinței</h1>
              </div>
            </a>
          </Link>
          <Link href="/service-six">
            <a>
              <div className="card">
                <MdMarkEmailRead className="h-8 w-8 text-[#02b1f8]" />
                <div>
                  <h1>Dosare</h1>
                  <span className=" text-xs text-gray-600">
                    Kindergeld/Elterngeld/Wohngeld
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InsuranceCards;
