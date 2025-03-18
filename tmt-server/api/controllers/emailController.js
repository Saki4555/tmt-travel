const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body; // User's details

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Nodemailer Transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.RECIPIENT_EMAIL, // Your Gmail (for sending & receiving)
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Verify Transporter Connection
    // transporter.verify((error, success) => {
    //   if (error) {
    //     console.error("Nodemailer Transporter Error:", error);
    //   } else {
    //     console.log("✅ Server is ready to send emails.");
    //   }
    // });

    // HTML Email Template for better presentation
    const mailOptions = {
      from: `"${name}" <${email}>`, // User's name & email as the sender
      to: process.env.RECIPIENT_EMAIL, // Your email (where you receive messages)
      subject: `New Message from ${name} - ${subject}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #57b4ba;">You have received a new message from ${name}</h2>
            <p><strong>Sender's Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 15px;">
              <h3 style="color: #57b4ba;">Message:</h3>
              <p>${message}</p>
            </div>
            <br />
            <p style="color: #6c757d;">This email was sent automatically via your contact form.</p>
          </body>
        </html>
      `, // HTML content
      //   replyTo: email, // Allows direct replies to the user
    };

    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    res.status(200).json({ success: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = { sendEmail };
