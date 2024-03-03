import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    // Return an error if the request method is not POST
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Extract task details from the request body
  const { to, subject, text } = req.body;

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'routinecheckerpro@gmail.com',
      pass: 'mvck poef bhxu vszh',
    },
  });

  // Create mail options
  const mailOptions = {
    from: 'routinecheckerpro@gmail.com',
    to,
    subject,
    text,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
}
