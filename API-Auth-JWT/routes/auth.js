const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch(err) {
        res.status(400).send(err);
    }
});


module.exports = router;