const express = require("express");
const { createTravelDeal, getAllDeals, updateDeal, deleteDeal } = require("../controllers/travelController");
const verifyJWT = require("../middlewares/verifyJWT");
const verifyAdmin = require("../middlewares/verifyAdmin");


const router = express.Router();

// Route to create a travel deal
router.post("/",verifyJWT, verifyAdmin, createTravelDeal);
router.get("/", getAllDeals);
router.put("/:id",verifyJWT,verifyAdmin, updateDeal);
router.delete("/:id",verifyJWT, verifyAdmin, deleteDeal);

module.exports = router;
