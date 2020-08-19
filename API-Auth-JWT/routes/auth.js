const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation');

// Register: /api/user/register

router.post('/register', async (req, res) => {
    // validate data before creating a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if user email is already registered in database
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch(err) {
        res.status(400).send(err);
    }
});

// Login: /api/user/login

router.post('/login', async (req, res) => {
    // validate data before login a user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if user email exists in database
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Invalid credentials');

    // checking if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid credentials');
    // res.status(200).send('Login success!');

    // Create & assign a json web token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.header('auth-token', token).send(token);
});


module.exports = router;