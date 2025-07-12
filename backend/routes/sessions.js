const express = require('express');
const Session = require('../models/Session');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all sessions
router.get('/', auth, async (req, res) => {
    const sessions = await Session.find();
    res.json(sessions);
});

// Create a session
router.post('/', auth, async (req, res) => {
    try {
        const session = new Session(req.body);
        await session.save();
        res.status(201).json(session);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/volunteer/:volId', auth, async (req, res) => {
    try {
        const sessions = await Session.find({ volId: req.params.volId });
        res.json(sessions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;
