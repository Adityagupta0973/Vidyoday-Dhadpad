const express = require('express');
const School = require('../models/School');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all schools
router.get('/', auth, async (req, res) => {
    const schools = await School.find();
    res.json(schools);
});

// Create a school
router.post('/', auth, async (req, res) => {
    try {
        const school = new School(req.body);
        await school.save();
        res.status(201).json(school);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
