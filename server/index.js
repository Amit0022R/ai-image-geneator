import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import * as  dotenv from 'dotenv';

dotenv.config(); // Load environment variables
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json({ limit: '50mb' })); // Parse JSON request bodies

app.get('/', async (req, res) => {
  res.send('Hello from AI Image Generation Server!');
});

