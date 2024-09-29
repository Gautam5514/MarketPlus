const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    throw new Error('MONGO_URI is not defined in the environment variables.');
}

// Async function to handle database connection
const connectDB = async () => {
    try {
        // Simplified connection without deprecated options
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exits the process if the connection fails
    }
};

// Export the connection function
module.exports = connectDB;
