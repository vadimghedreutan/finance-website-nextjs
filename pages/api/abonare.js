import nodemailer from "nodemailer";

export default async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: '"TofanConsult" <dev.tofanconsult@gmail.com>',
      to: "dev.tofanconsult@gmail.com",
      subject: `Contact de la trimitere abonare de la ${email}`,
      html: `
      <p style="font-size:24px;font-weight:700;">Aveti un nou contact de la trimitere <span style="color:#034A75;text-transform:uppercase;">abonare</span></p>
      <h3 style="font-size:20px;">Detalii de contact</h3>
      <ul>
        <li style="font-size:20px;">E-mail: ${email}</li>
      </ul>
      `,
    });

    console.log("Message sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
