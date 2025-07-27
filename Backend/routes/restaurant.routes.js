// routes/restaurant.routes.js

import express from 'express';
import {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} from '../controllers/restaurant.controller.js';

const router = express.Router();

// Get all restaurants
router.get('/', getAllRestaurants);

// Get restaurant by ID
router.get('/:id', getRestaurantById);

// Create new restaurant
router.post('/', createRestaurant);

// Update restaurant by ID
router.put('/:id', updateRestaurant);

// Delete restaurant by ID
router.delete('/:id', deleteRestaurant);

export default router;
