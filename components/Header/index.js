import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/outline";
import Image from "next/image";

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
            <Image
              src="/logo.jpg"
              width="120"
              height="72"
              alt="TofanConsult logo"
            />
          </Link>
          <button
            className="btn_mobile"
            aria-label="menu"
            type="button"
            onClick={toggle}
          >
            <MenuIcon />
          </button>

          <div className="mobile_phone">
            <a href="tel:004917624227895" aria-label="contact">
              <PhoneIcon className="h-7" />
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
              <Link href="/#cards">Servicii</Link>
            </li>
            <li>
              <Link href="/#about">Despre Noi</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
            <li className="phone">
              <a href="tel:004917624227895">
                <PhoneIcon className="h-6 text-black mr-2" />
                <span>+49&nbsp;17624227895</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
