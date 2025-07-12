const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true
    },
    description : {
        type: String,
        required: true,
        trim: true
    },
    filename : {
        type: String,
        required: true,
        trim: true
    },
    language : {
        type: String,
        trim: true
    },
    class : {
        type: Number
    }
    
});

module.exports = mongoose.model('Resource', ResourceSchema);