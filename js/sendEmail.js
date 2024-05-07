const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

const path = require('path');

app.use(express.static(path.join(__dirname, '..')));

app.get("/", (req, res) => {
    // Use path.join to create a path that works across all platforms
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});


app.post("/submit_form", async (req, res) => {
  try {
    const { name, service, email, phone } = req.body;

    // Construct email message
    const message = {
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
      to: "raftaar.1277@gmail.com, j2286989@gmail.com",
      subject: "New Form Submission",
      text: `Name: ${name}\nService: ${service}\nEmail: ${email}\nPhone: ${phone}`,
    };

    // Send mail with defined transport object
    const info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while submitting the form.");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
