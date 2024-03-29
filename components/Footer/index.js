import Link from "next/link";

function Footer() {
  return (
    <div className="section_footer">
      <div className="container">
        <div className="flex flex-col items-center gap-2 justify-between sm:flex-row sm:space-x-2">
          <div className="flex flex-col items-center text-xs gap-2 sm:flex-row sm:space-x-2">
            <div className="footer_copyright">
              <p>© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <a
              href="https://vadimghedreutan.io"
              target="_blank"
              className="flex items-center space-x-1"
            >
              <p>– Created by </p>
              <span className="font-bold uppercase">VG</span>
            </a>
          </div>
          <div>
            <Link href="/privacy-policy">
              <span className="text-xs cursor-pointer">Privacy Policy</span>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
