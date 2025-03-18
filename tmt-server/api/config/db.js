const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    
     mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to db");
  }
};


module.exports = connectDB;
