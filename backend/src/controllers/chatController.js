const { callAI } = require("../services/aiService");

const MAX_MESSAGE_LENGTH = 500;

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    // Validation
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required and must be a string." });
    }

    const trimmed = message.trim();

    if (trimmed.length === 0) {
      return res.status(400).json({ error: "Message cannot be empty." });
    }

    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Message too long. Maximum ${MAX_MESSAGE_LENGTH} characters allowed.`,
      });
    }

    // Call AI
    const reply = await callAI(trimmed);
    return res.json({ reply });
  } catch (err) {
    console.error("[ChatController] Error:", err.message);
    return res.status(500).json({
      error: "Something went wrong. Please try again.",
      details: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

module.exports = { chat };
