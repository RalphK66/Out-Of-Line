const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transport = {
  host: "smtp.gmail.com", // Gmail SMTP server
  port: 465, 
  auth: {
    user: 'out.of.line.inc@gmail.com',
    pass: 'pljsfihskynizqxj',
  },
};
    // SMTP transport to send messages from our app
const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});
    // send email with contact form content
router.post("/send", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;

    // content of messge to be sent
  const mail = {
    from: name,
    to: "out.of.line.inc@gmail.com", // Where we will receive messages
    subject: "New Message from Contact Form",
    text: content,
  };
    // send mail from Nodemailer SMTP to gmail SMTP
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
        // automatic response
      transporter.sendMail(
        {
          from: "out.of.line.inc@gmail.com", 
          to: email,
          subject: "Submission was successful",
          text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
});

module.exports = router;
