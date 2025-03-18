const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
