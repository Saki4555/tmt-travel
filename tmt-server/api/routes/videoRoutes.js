const express = require("express");
const { uploadVideo, getVideos, deleteVideo } = require("../controllers/videoController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const verifyJWT = require("../middlewares/verifyJWT");
const verifyAdmin = require("../middlewares/verifyAdmin");

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save uploaded videos in the "uploads" folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ 
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["video/mp4", "video/mov", "video/avi", "video/mkv"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only MP4, MOV, AVI, and MKV are allowed."));
    }
  }
});

// Upload Video
router.post("/upload",verifyJWT, verifyAdmin, upload.single("video"), uploadVideo);

// Get All Videos
router.get("/", getVideos);
router.delete("/:id",verifyJWT, verifyAdmin, deleteVideo);

module.exports = router;
