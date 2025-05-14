const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

// @desc   Start Google Auth
// @route  GET /auth/google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// @desc   Google Auth Callback
// @route  GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // You can either redirect with token in query or set it as cookie
    // res.redirect(`http://localhost:3000/auth-success?token=${token}`); // Frontend handles token
    res.json({
      message: "Google authentication successful",
      token: token,
      user: req.user,
    });
  }
);

module.exports = router;
