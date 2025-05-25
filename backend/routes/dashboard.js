// backend/routes/dashboard.js
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}, you are authorized ✅` });
});

module.exports = router;
