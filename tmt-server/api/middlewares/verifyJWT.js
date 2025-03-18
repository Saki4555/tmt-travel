const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    // Check if Authorization header exists
    if (!authorization) {
      return res.status(403).json({
        error: true,
        message: "Access Denied: No Token Provided",
      });
    }

    // Validate Bearer token format
    const parts = authorization.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res.status(400).json({
        error: true,
        message: "Invalid Token Format. Expected 'Bearer <token>'",
      });
    }

    const token = parts[1];

    // Verify JWT Token
    jwt.verify(token, process.env.ACCESS_KEY_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error: true,
          message: err.name === "TokenExpiredError"
            ? "Unauthorized: Token has expired"
            : "Unauthorized: Invalid token",
        });
      }

      req.user = decoded; // Attach decoded token data to request
      next();
    });
  } catch (error) {
    console.error("JWT Verification Error:", error);
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
};

module.exports = verifyJWT;
