const sgMail = require('@sendgrid/mail')

export default async function (req, res) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { name, email, message } = req.body

  const content = {
    to: process.env.TO_MAIL_ADDRESS, 
    from: process.env.SENDER, 
    subject: `New Message From - ${name} - ${email}`,
    text: message,
    html: `<p>${message}</p>`
  }
  try {
    await sgMail.send(content)
    res.status(200).send('Beskjeden er sendt.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Beskjeden ble ikke sendt.')
  }
}