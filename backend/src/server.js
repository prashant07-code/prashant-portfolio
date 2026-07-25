require("dotenv").config();
const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Trust proxy (for Render/Railway deployments) ───
app.set("trust proxy", 1);

// ─── Middleware ───────────────────────────────────────
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));

// ─── Routes ───────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "🚀 Prashant's Portfolio API is running!",
    version: "1.0.0",
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

// API Routes
app.use("/api/chat", chatRoutes);
app.use("/api/contact", contactRoutes);

// ─── 404 Handler ──────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Route not found. Check API documentation." });
});

// ─── Global Error Handler ─────────────────────────────
app.use((err, req, res, next) => {
  console.error("❌ [Server Error]", err);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === "production" ? "Internal server error" : err.message,
  });
});

// ─── Start Server ─────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅ Server started!`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`📍 Chat API: POST ${PORT}/api/chat`);
  console.log(`📍 Contact API: POST ${PORT}/api/contact`);
  console.log(`\n⚙️  Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🔑 AI API: ${process.env.AI_API_URL || "Not configured"}\n`);
});
