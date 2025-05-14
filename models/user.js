const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Name must be provided!"] },
    email: {
      type: String,
      unique: true,
      required: [true, "Email must be provided!"],
    },
    password: { type: String, required: [true, "A password must be entered!"] },
    googleId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
