import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import hotelRoutes from "./routes/hotels.routes.js";
import restaurantRoutes from './routes/restaurant.routes.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


app.use("/api/hotels", hotelRoutes);
app.use('/api/restaurants', restaurantRoutes);



connectDB().then(() => {
  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error("❌ Failed to connect to DB", err);
});
