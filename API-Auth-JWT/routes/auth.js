const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.post('/register', (req, res) => {
    res.send('register');
});


module.exports = router;