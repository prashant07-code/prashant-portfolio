const express = require("express");
const router = express.Router();
const { contact } = require("../controllers/contactController");

// POST /api/contact
router.post("/", contact);

module.exports = router;
