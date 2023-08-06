import Header from "./Header";
import Footer from "./Footer";
import CookieConsent, { OPTIONS } from "react-cookie-consent";

export default function Layout({ children }) {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
      <CookieConsent
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
      <chat-widget
        location-id="FFklcBlxoWQjeemWTdNS"
        heading="Aveți o întrebare?"
        sub-heading="Scrie întrebarea ta aici și unul din colegii noștri va lua legatura cu tine"
        prompt-msg="Salut! Ai o intrebare? Scrie aici!"
        legal-msg="Prin trimitere, sunteți de acord să primiți SMS-uri sau e-mailuri pentru canalul furnizat"
        use-email-field="true"
        revisit-prompt-msg="Bine ai venit înapoi {{name}}, cum te putem ajuta astazi?"
        support-contact="dev.tofanconsult@gmail.com"
        success-msg="o persoană din echipa noastră vă va contacta "
        thank-you-msg="Multumesc!"
        prompt-avatar="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png"
        agency-name="RainmakerAI"
        agency-website="Rainmakerai.com"
      ></chat-widget>{" "}
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      >
        {" "}
      </script>
    </div>
  );
}
