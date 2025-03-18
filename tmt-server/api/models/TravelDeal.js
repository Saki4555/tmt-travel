const mongoose = require("mongoose");

const travelDealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // e.g., "Escape to Paris"
    destination: { type: String, required: true }, // e.g., "Paris"
    image: { type: String, required: true }, // URL or path to image
    originalPrice: { type: Number, required: true }, // e.g., 3200
    discountedPrice: { type: Number, required: true }, // e.g., 2344 (final price after discount)
    duration: { type: String, required: true }, // e.g., "3 Days, 2 Nights"
    description: { type: String, required: true }, // Short description of the deal
    inclusions: [{ type: String }], // e.g., ["Hotel Stay", "Breakfast", "City Tour"]
    exclusions: [{ type: String }], // e.g., ["Flights", "Personal Expenses"]
    topDeal: { type: Boolean, default: false }, // Indicates if this is a top deal
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

const TravelDeal = mongoose.model("TravelDeal", travelDealSchema);

module.exports = TravelDeal;
