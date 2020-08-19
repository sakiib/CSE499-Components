const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Import Routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to mongoDB')
);

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(3000, () => console.log('server running on port: 3000'));
