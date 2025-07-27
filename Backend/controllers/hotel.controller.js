import Hotel from '../models/hotel.model.js';

// Get all hotels
export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hotels' });
  }
};

export const getHotelByName = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ name: req.params.name });
    if (!hotel) return res.status(404).json({ error: 'Hotel not found' });
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching hotel by name' });
  }
};
export const getHotelByLocation = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ location: req.params.location });
    if (!hotel) return res.status(404).json({ error: 'Hotel not found at this location' });
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching hotel by location' });
  }
};

// Create new hotel
export const addHotel = async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add hotel', details: error.message });
  }
};
