// server/sendEmail.js

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  // configure nodemailer transporter here
});

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;
