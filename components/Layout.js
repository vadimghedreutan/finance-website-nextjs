import Header from "./Header";
import Footer from "./Footer";
import CookieConsent, { OPTIONS } from "react-cookie-consent";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        debug={true}
        disableStyles={true}
        buttonClasses="bg-white text-black py-1 px-2 rounded-md border-0 text-sm ml-2 md:mt-0"
        declineButtonClasses="bg-white text-black py-1 px-2 rounded-md border-0 text-sm mt-2 md:mt-0"
        containerClasses="w-full bg-[#034A75] text-center p-3 flex flex-col gap-2 md:flex-row md:justify-between fixed buttom-0 z-10"
        contentClasses="text-sm text-white md:flex items-center"
        buttonText="Acceptati cookie-urile"
        declineButtonText="Refuza"
        expires={365}
        enableDeclineButton
      >
        Pentru a oferi o experiență optimă, pe această pagină folosim cookies.
      </CookieConsent>
    </div>
  );
}
