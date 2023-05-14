import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailer = (sender, text, name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS
    }
    
  });

  const mailOptions = {
    from: sender,
    to: "chyke.ghoul@gmail.com",
    subject: `Email from ${name}`,
    text: text
  };

  transporter
    .sendMail(mailOptions)
    .then(() => console.log("mail sent successfully"))
    .catch((error) => console.log(error));
};

export default mailer;