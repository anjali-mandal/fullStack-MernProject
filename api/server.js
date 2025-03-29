const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// console.log('Mongo URI:', process.env.MONGO);  // Check if this prints the correct Mongo URI

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
