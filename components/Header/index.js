import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/outline";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/logo.jpg" alt="" />
            </a>
          </Link>
          <button className="btn_mobile" type="button" onClick={toggle}>
            <MenuIcon />
          </button>

          <div className="mobile_phone">
            <a href="tel:00491783096185">
              <PhoneIcon className="h-6" />
            </a>
          </div>
        </div>
        <div
          onClick={toggle}
          className={`lg:flex flex-grow items-center ${
            navbarOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="navigation__list">
            <li>
              <Link href="/#cards">
                <a>Srvicii</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a>Despre Noi</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className="phone">
              <a href="tel:00491783096185">
                <PhoneIcon className="h-6 text-black mr-2" />
                <span>+49 1783096185</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
