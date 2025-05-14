require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
require("./config/passport");

const connectDB = require("./utils/db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const app = express();

connectDB();

app.use(passport.initialize());

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true,
  })
);

app.get("/", (req, res) => res.send("API is running"));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// 1096395783296-jufa957gjpq2k1e4a86q0vhegulnjan5.apps.googleusercontent.com
// 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    - secret
