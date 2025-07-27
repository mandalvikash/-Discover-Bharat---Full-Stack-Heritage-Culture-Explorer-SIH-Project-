import mongoose from "mongoose";

const amenitySchema = new mongoose.Schema({
  icon: String,
  name: String
});

const coordinateSchema = new mongoose.Schema({
  lat: Number,
  lng: Number
});

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String
});

const restaurantSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  description: String,
  fullDescription: String,
  location: String,
  rating: Number,
  reviews: Number,
  priceRange: String,
  images: [String],
  amenities: [amenitySchema],
  coordinates: coordinateSchema,
  cuisine: [String],
  menu: [menuItemSchema]
});

export default mongoose.model('Restaurant', restaurantSchema);
