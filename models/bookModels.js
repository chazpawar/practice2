const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
        unique : true,
        trim : true,
        maxlength : 100,
    },
    author: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    genre: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);    
module.exports = Book;

