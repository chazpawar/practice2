const dotenv = require('dotenv').config();      
const mongoose = require('mongoose');   


const connectDB = async () => {
    try {
        await mongoose.connect("2")
        
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
    
    }
    
}

module.exports = connectDB;