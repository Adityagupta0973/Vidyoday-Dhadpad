const express = require('express');
const Feedback = require('../models/Feedback');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all feedback
router.get('/', auth, async (req, res) => {
    const feedback = await Feedback.find();
    res.json(feedback);
});

// Create feedback
router.post('/', auth, async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json(feedback);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
