const express = require("express");
const router = express.Router();

const {
  registerStaff,
  loginStaff,
  getMe,
} = require("../controllers/staff.controller");

const authMiddleware = require("../middlewares/auth.middleware");

// 1. POST /staff/register
router.post("/register", registerStaff);

// 2. POST /staff/login
router.post("/login", loginStaff);

// 3. GET /staff/me (Protected Route)
router.get("/me", authMiddleware, getMe);

module.exports = router;