const jwt = require("jsonwebtoken");

const generateToken = (email) => {
   
 
  return jwt.sign({ email }, process.env.ACCESS_KEY_TOKEN, {
    expiresIn: process.env.TOKEN_EXPIRATION || "1h",
  });
};

module.exports = generateToken;
