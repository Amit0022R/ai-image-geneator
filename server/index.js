import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import * as  dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config(); // Load environment variables
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json({ limit: '50mb' })); // Parse JSON request bodies

app.use('/api/v1/post', postRoutes); // Use post routes
app.use('/api/v1/dalle', dalleRoutes); // Use dalle routes

app.get('/', async (req, res) => {
  res.send('Hello from AI Image Generation Server!');
});

const StartServer = async () => {
    
    try {
        connectDB(process.env.MONGODB_URL); // Connect to MongoDB
        app.listen(8080, () => console.log(`Server is running on port http://localhost:8080`));
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);  
        process.exit(1); // Exit the process if connection fails
    }
}

StartServer();