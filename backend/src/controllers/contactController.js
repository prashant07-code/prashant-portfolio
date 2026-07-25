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

    // TODO: Send email using nodemailer or similar
    // For now, just log and respond
    console.log(`📧 Contact Form Submission:\n Name: ${name}\n Email: ${email}\n Message: ${message}`);

    // Simulate sending email (replace with actual email service)
    // const mailSent = await sendEmail(email, name, message);

    return res.json({
      success: true,
      message: "Thank you for reaching out! I'll get back to you soon.",
    });
  } catch (err) {
    console.error("[ContactController] Error:", err.message);
    return res.status(500).json({ error: "Failed to send message. Please try again." });
  }
};

module.exports = { contact };
