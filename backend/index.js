import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { connect } from "mongoose";
import tokenRoutes from './routes/tokenRoutes.js';
import { startCoinDataScheduler } from './services/coinDataService.js';

// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(
  json({
    limit: "50mb",
  })
);

// Connect to MongoDB
// connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('MongoDB connection error:', err));

// Start coin data refresh scheduler (initial load + interval)
startCoinDataScheduler();

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the DexLens backend!');
});

// Token routes
app.use('/api/tokens', tokenRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
