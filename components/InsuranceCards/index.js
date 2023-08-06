import Link from "next/link";
import { FaHome, FaLightbulb, FaChartLine } from "react-icons/fa";
import { AiOutlineFileProtect, AiFillEuroCircle } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const CardItem = [
  {
    title: "Asigurări",
    href: "/asigurari",
    icon: <AiOutlineFileProtect className="h-8 w-8 text-[#02b1f8]" />,
    subtitle: "",
  },
  {
    title: "Credite",
    href: "/credite",
    icon: <AiFillEuroCircle className="h-8 w-8 text-[#02b1f8]" />,
    subtile: "",
  },
  {
    title: "Curent/Gaz",
    href: "/curent-gas",
    icon: <FaLightbulb className="h-8 w-8 text-[#02b1f8]" />,
    subtitle: "",
  },
  {
    title: "Investiții",
    href: "/investitii",
    icon: <FaChartLine className="h-8 w-8 text-[#02b1f8]" />,
    subtitle: "",
  },
  {
    title: "Procurarea locuinței",
    href: "/imobil",
    icon: <FaHome className="h-8 w-8 text-[#02b1f8]" />,
    subtitle: "",
  },
  {
    title: "Dosare",
    href: "/dosare",
    icon: <MdMarkEmailRead className="h-8 w-8 text-[#02b1f8]" />,
    subtitle: "Kindergeld/Elterngeld/Wohngeld",
  },
];

function InsuranceCards() {
  return (
    <section className="cards" id="cards">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {CardItem.map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <div className="card">
                  <div className="card_icon">{item.icon}</div>
                  <div className="card_content">
                    <h3 className="sm:text-xl font-bold">{item.title}</h3>
                    <p className="text-sm">{item.subtitle}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InsuranceCards;
