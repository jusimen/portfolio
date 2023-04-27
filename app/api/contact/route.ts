import nodemailer from 'nodemailer';

export async function POST( req: Request, res: Response ) {
  
    const {email, name, message} = await req.json();
    

    // Create a Nodemailer transporter using SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Set up email data with unicode symbols
    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.MY_EMAIL,
      subject: 'New Contact Form Submission',
      text: message,
    };

    // Send email with defined transport object
    try {
      // await transporter.sendMail(mailOptions);
      return new Response('Email sent successfully', { status: 200 })
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response('Error sending email', { status: 500 })
    }
}
