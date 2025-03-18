const express = require("express");

const jwt = require("jsonwebtoken");

const { registerUser, getAllUsers, getUser, authenticateUser } = require("../controllers/userController");
const verifyJWT = require("../middlewares/verifyJWT");
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = express.Router();

router.post("/authentication", authenticateUser);
router.post("/register", registerUser);
router.get("/",verifyJWT, verifyAdmin, getAllUsers);
router.get("/:uid", getUser);
module.exports = router;
