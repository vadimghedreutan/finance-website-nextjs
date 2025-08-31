// app/components/ChatWidget.tsx
"use client"

import Script from "next/script"

type Props = {
    load: boolean
}

export default function ChatWidget({ load }: Props) {
    if (!load) return null

    return (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: `
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
            ></chat-widget>
          `,
                }}
            />

            <Script
                src="https://widgets.leadconnectorhq.com/loader.js"
                strategy="afterInteractive"
                data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            />
        </>
    )
}
