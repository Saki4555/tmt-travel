const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true }, // Added description field
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
