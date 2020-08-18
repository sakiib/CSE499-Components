const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to mongoDB')
);

// Import Routes
const authRoutes = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoutes);

app.listen(3000, () => console.log('server running on port: 3000'));
