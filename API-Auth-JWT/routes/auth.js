const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('./validation');

router.post('/register', async (req, res) => {
    // validate data before creating a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if user email is already registered in databasee
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exists');

    // create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch(err) {
        res.status(400).send(err);
    }
});


module.exports = router;