const dotenv = require('dotenv').config();      
const mongoose = require('mongoose');   


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/express","add your own db connection string here")
        
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
    
    }
    
}

module.exports = connectDB;