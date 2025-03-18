const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const authenticateUser = (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const token = generateToken(email)

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Register User
const registerUser = async (req, res) => {
    try {
      const { uid, email, name, role, status } = req.body;
  
      // Check if the user already exists
      let userExists = await User.findOne({ uid });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // Create a new user
      const user = await User.create({
        uid,
        email,
        name,
        role,
        status,
      });
  
      res.status(201).json({
        message: "User registered successfully",
        user,
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  // Get all users
  const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
  
  // Get a single user
  const getUser = async (req, res) => {
    try {
      const user = await User.findOne({ uid: req.params.uid });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

module.exports = { authenticateUser, registerUser, getAllUsers, getUser };
