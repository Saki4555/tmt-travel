const express = require("express");
const { uploadImage, getImages, deleteImage } = require("../controllers/imageController");
const verifyJWT = require("../middlewares/verifyJWT");
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = express.Router();

// Routes
router.post("/upload", verifyJWT,verifyAdmin, uploadImage); // Protected route
router.get("/", getImages); // Public route
router.delete("/:id", verifyJWT,verifyAdmin, deleteImage); // Protected route

module.exports = router;
