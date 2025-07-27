import mongoose from "mongoose";

const amenitySchema = new mongoose.Schema({
  icon: String,
  name: String
});

const coordinateSchema = new mongoose.Schema({
  lat: Number,
  lng: Number
});

const hotelSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  description: String,
  fullDescription: String,
  location: String,
  rating: Number,
  reviews: Number,
  price: String,
  originalPrice: String,
  images: [String],
  amenities: [amenitySchema],
  coordinates: coordinateSchema
});

export default mongoose.model('Hotel', hotelSchema);
