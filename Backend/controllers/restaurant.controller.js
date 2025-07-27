// controllers/restaurant.controller.js

import Restaurant from '../models/restaurant.model.js';

// GET all restaurants
export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

// GET restaurant by ID
export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ id: req.params.id });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching restaurant' });
  }
};

// CREATE a new restaurant
export const createRestaurant = async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ error: 'Error creating restaurant', details: error.message });
  }
};

// UPDATE restaurant by ID
export const updateRestaurant = async (req, res) => {
  try {
    const updated = await Restaurant.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Restaurant not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error updating restaurant' });
  }
};

// DELETE restaurant by ID
export const deleteRestaurant = async (req, res) => {
  try {
    const deleted = await Restaurant.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ error: 'Restaurant not found' });
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting restaurant' });
  }
};
