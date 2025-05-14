const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  getMe,
  updateProfile,
  updatePassword,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.post("/auth/signup", signupUser);
router.post("/auth/login", loginUser);
router.get("/me", protect, getMe);
router.patch("/me", protect, updateProfile);
router.put("/auth/update-password", protect, updatePassword);

module.exports = router;
