const express = require('express');
const router = express.Router();
const User = require('../model/User');

// Validation
const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(255)
        .required(),
    email: Joi.string()
        .min(3)
        .max(255)
        .required()
        .email(),
    password: Joi.string()
        .min(3)
        .max(1024)
        .required()
});

router.post('/register', async (req, res) => {
    try {
        const validation = await schema.validateAsync(req.body);
        res.send(validation);
    } catch(err) {
        res.send(err);
    }
    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    // try {
    //     const savedUser = await user.save();
    //     res.send(savedUser);
    // } catch(err) {
    //     res.status(400).send(err);
    // }
});


module.exports = router;