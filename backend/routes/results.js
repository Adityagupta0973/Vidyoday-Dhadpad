const express = require('express');
const Result = require('../models/Results');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all results
router.get('/', auth, async (req, res) => {
    const results = await Result.find();
    res.json(results);
});

// Create a result
router.post('/', auth, async (req, res) => {
    try {
        const result = new Result(req.body);
        await result.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
