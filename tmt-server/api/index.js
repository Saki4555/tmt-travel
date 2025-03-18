const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const travelRoutes = require("./routes/travelRoutes");
const videoRoutes = require("./routes/videoRoutes");
const imageRoutes = require("./routes/imageRoutes");
const emailRoutes = require("./routes/emailRoutes");

const connectDB = require("./config/db");
require("dotenv").config();
connectDB();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/travel-deals", travelRoutes);
app.use("/api/v1/videos", videoRoutes);
app.use("/api/v1/images", imageRoutes);
app.use("/api/v1/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
