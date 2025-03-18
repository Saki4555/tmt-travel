const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["traveler", "admin"],
      default: "traveler",
    },
    status: {
      type: String,
      enum: ["approved", "pending", "banned"],
      default: "approved",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
