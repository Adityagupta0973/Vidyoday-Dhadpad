const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    district: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('School', SchoolSchema);