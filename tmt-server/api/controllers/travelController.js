const TravelDeal = require("../models/TravelDeal");

// @desc    Create a new travel deal
// @route   POST /api/v1/travel-deals
// @access  Public
exports.createTravelDeal = async (req, res) => {
  // console.log("topDeal Type Before Saving:", typeof req.body.topDeal, req.body.topDeal);
  try {
    const { title, destination, image, originalPrice, discountedPrice, duration, description, inclusions, exclusions, topDeal } = req.body;

    // Validation
    if (!title || !destination || !image || !originalPrice || !discountedPrice || !duration || !description) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const newDeal = new TravelDeal({
      title,
      destination,
      image,
      originalPrice,
      discountedPrice,
      duration,
      description,
      inclusions,
      exclusions,
      topDeal
    });

    await newDeal.save();
    res.status(201).json({ message: "Travel deal created successfully", data: newDeal });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get all travel deals
// @route GET /api/v1/travel-deals
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await TravelDeal.find().sort({ updatedAt: -1 }); 
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching travel deals", error });
  }
};

// @desc Update a travel deal
// @route PUT /api/v1/travel-deals/:id
exports.updateDeal = async (req, res) => {
  try {
    const updatedDeal = await TravelDeal.findByIdAndUpdate(
      req.params.id,
      req.body, // ✅ Replace the entire document with req.body (PUT behavior)
      { new: true, runValidators: true }
    );

    if (!updatedDeal) return res.status(404).json({ message: "Deal not found" });

    res.status(200).json(updatedDeal);
  } catch (error) {
    res.status(500).json({ message: "Error updating deal", error });
  }
};

exports.deleteDeal = async (req, res) => {
  try {
    const deletedDeal = await TravelDeal.findByIdAndDelete(req.params.id);
    if (!deletedDeal) return res.status(404).json({ message: "Deal not found" });
    res.status(200).json({ message: "Deal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting deal", error });
  }
};


