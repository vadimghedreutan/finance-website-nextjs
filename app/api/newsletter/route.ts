import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json(
                { error: "Invalid email" },
                { status: 400 }
            )
        }

        const { error } = await resend.emails.send({
            from: process.env.RESEND_FROM || "onboarding@resend.dev",
            to: process.env.RESEND_TO ? [process.env.RESEND_TO] : [email], // send to you; or echo to the user if you prefer
            replyTo: email, // lets you reply directly from the received email
            subject: "Nou abonat la newsletter",
            text: `Adresa de email nou abonată: ${email}`,
            html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      <h2 style="color:#0C3559;">Nou abonat la newsletter 📩</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p style="margin-top:16px; font-size:14px; color:#555;">
        Acest mesaj a fost generat automat de site-ul dvs. 
      </p>
    </div>
  `,
        })

        if (error) {
            console.error(error)
            return NextResponse.json(
                { error: "Resend send failed" },
                { status: 500 }
            )
        }

        return NextResponse.json({ ok: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
    }
}
