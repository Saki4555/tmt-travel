const User = require("../models/User"); // Import User model

const verifyAdmin = async (req, res, next) => {
  try {
    // Ensure user object is available from verifyJWT middleware
    if (!req.user) {
      return res.status(401).json({
        error: true,
        message: "Unauthorized: No user data found. Please log in.",
      });
    }

    // Fetch user from the database to get the latest role
    const user = await User.findOne({ email: req.user.email }).select("email role status");
    

    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }

    // Check if the user has admin role
    if (user.role !== "admin" || user.status !== 'active') {
      return res.status(403).json({
        error: true,
        message: "Forbidden: Admin access required.",
      });
    }

    req.user = user; // Update req.user with fresh user data
    next(); // User is admin, proceed to next middleware or route handler
  } catch (error) {
    console.error("Admin Verification Error:", error);
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
};

module.exports = verifyAdmin;
