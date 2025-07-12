const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    creativity: { type: Number, required: true },
    problemSolving: { type: Number, required: true },
    observation: { type: Number, required: true },
    communication: { type: Number, required: true },
    questioning: { type: Number, required: true },
    collaboration: { type: Number, required: true }
});

const ResultSchema = new mongoose.Schema({
    sessionId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Session' },
    providerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    score: { type: ScoreSchema, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Result', ResultSchema);