const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all users (admin only)
router.get('/', auth, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });
    const users = await User.find();
    res.json(users);
});

// Get current user profile
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    console.log(user);
    res.json(user);
});
// Get user by ID (admin only)
router.get('/:id', auth, async (req, res) => {
    // if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ msg: 'User not found' });
        console.log(user);
        res.json(user);
    } catch (err) {
        res.status(400).json({ msg: 'Invalid user ID' });
    }
});
module.exports = router;
