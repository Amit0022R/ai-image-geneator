import mongoose from "mongoose";

const connectDB = async (url) => {
    mongoose.set('strictQuery', true); // Set strict query mode

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected successfully'))
        .catch((error) => console.error('MongoDB connection error:', error));
}

export default connectDB;