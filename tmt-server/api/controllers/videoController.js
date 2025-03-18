const Video = require("../models/Video");
const fs = require("fs");
const path = require("path");

exports.uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Video file is required" });
    }

    const video = new Video({
      url: `/uploads/${req.file.filename}`,
    });

    await video.save();
    res.status(201).json({ message: "Video uploaded successfully", video });
  } catch (error) {
    console.error("Error uploading video:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the video by ID
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Extract the filename from the stored URL
    const videoFilename = path.basename(video.url);
    const videoPath = path.join(__dirname, "../../uploads", videoFilename);

    // Delete the file from the server
    if (fs.existsSync(videoPath)) {
      fs.unlinkSync(videoPath);
    }

    // Delete the video record from the database
    await Video.findByIdAndDelete(id);

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    console.error("Error deleting video:", error);
    res.status(500).json({ message: "Server error while deleting video" });
  }
};