const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');   

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});
connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const sessionRoutes = require('./routes/sessions');
const schoolRoutes = require('./routes/schools');
const resultRoutes = require('./routes/results');
const feedbackRoutes = require('./routes/feedback');
const resourceRoutes = require('./routes/resources');
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/resources', resourceRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});