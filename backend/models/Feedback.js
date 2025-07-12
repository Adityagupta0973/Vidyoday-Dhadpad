const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Session'
    },
    sessionRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    volunteerRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);