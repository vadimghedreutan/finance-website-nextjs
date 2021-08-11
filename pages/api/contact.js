import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { firstName, phone, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: '"TofanConsult" <dev.tofanconsult@gmail.com>',
      to: 'dev.tofanconsult@gmail.com, ghedrik@gmail.com',
      subject: `Contact form submission from ${firstName}`,
      html: `
      <p>You have a new contact form submission</p>
      <h3>Contact Details</h3>
      <ul>
        <li><strong>Name:<strong> ${firstName} </li>
        <li><strong>Email:<strong> ${email} </li>
        <li><strong>Phone:<strong> ${phone} </li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
      `,
    })

    console.log('Message sent', emailRes.messageId)
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}
