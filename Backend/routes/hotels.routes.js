// In routes/hotel.routes.js
import express from "express";
const router = express.Router();
import { getAllHotels, addHotel } from "../controllers/hotel.controller.js";
import { getHotelByName } from "../controllers/hotel.controller.js";
import { getHotelByLocation } from "../controllers/hotel.controller.js";

router.get("/", getAllHotels);
router.get("/byname/:name", getHotelByName);
router.get("/bylocation/:location", getHotelByLocation);

router.post("/", addHotel); // Admin only

export default router;
