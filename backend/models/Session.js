const mongoose = require('mongoose');

const { Schema } = mongoose;

const sessionSchema = new Schema({
    type: {
        type: String,
        enum: ['onboarding', 'evaluation', 'workshop', 'next'],
        required: true
    },
    schId: {
        type: Schema.Types.ObjectId,
        ref: 'School',
        required: true
    },
    volId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['completed', 'pending', 'cancelled'],
        required: true
    },
    class: {
        type: Number,
        enum: [6, 7, 8],
        required: true
    },
    attendedStudents: {
        type: Number,
        required: true
    },
    totalStudents: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);