const Image = require("../models/Image");

// Upload Image
exports.uploadImage = async (req, res) => {
  try {
    const { imageUrl, name, description } = req.body;
   

    if (!imageUrl || !name || !description) {
      return res.status(400).json({ message: "Image URL, name, and description are required" });
    }

    const newImage = new Image({ url: imageUrl, name, description }); // Include description
    await newImage.save();

    res.status(201).json({ message: "Image uploaded successfully", image: newImage });
  } catch (error) {
    res.status(500).json({ message: "Error uploading image", error: error.message });
  }
};


// Get All Images
exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error: error.message });
  }
};

// Delete Image
exports.deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedImage = await Image.findByIdAndDelete(id);
    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image", error: error.message });
  }
};
