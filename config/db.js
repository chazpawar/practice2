const dotenv = require('dotenv').config();      
const mongoose = require('mongoose');   


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://chaitanya09pawar:ad%%min@kalvi.6sq9n.mongodb.net/practice2")
        
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
    
    }
    
}

module.exports = connectDB;