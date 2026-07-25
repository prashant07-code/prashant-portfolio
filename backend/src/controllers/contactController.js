const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);


const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;


    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required."
      });
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        error: "Invalid email format."
      });
    }


    if (message.trim().length < 10) {
      return res.status(400).json({
        error: "Message must be at least 10 characters."
      });
    }



    // Send Email using Resend
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      // Resend testing restriction:
      // Only your Resend account email can receive emails
      to: "nfxantaryami@gmail.com",

      subject: `New Portfolio Contact From ${name}`,

      text: `
New Portfolio Contact Received

Name:
${name}

Email:
${email}

Message:
${message}
      `,
    });



    console.log("✅ Resend Email Sent:", emailResponse);



    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out! I'll get back to you soon.",
    });



  } catch (err) {

    console.error(
      "❌ [ContactController] Error:",
      err.message
    );


    return res.status(500).json({
      error: "Failed to send message. Please try again."
    });

  }
};


module.exports = { contact };