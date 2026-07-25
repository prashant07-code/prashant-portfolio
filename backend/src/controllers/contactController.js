const nodemailer = require("nodemailer");

const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({ error: "Message must be at least 10 characters." });
    }


    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact From ${name}`,
      text: `
Name: ${name}

Email: ${email}

Message:
${message}
      `,
    });


    return res.json({
      success: true,
      message: "Thank you for reaching out! I'll get back to you soon.",
    });

  } catch (err) {
    console.error("[ContactController] Error:", err.message);

    return res.status(500).json({
      error: "Failed to send message. Please try again."
    });
  }
};

module.exports = { contact };