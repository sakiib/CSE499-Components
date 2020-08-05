const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Getting all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//Getting one user
router.get('/:id', getUser, async (req, res) => {
    res.json(res.user);
});

//Creating one user
router.post('/', async (req, res) => {
    user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
});

//Updating one user
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.username != null) {
        res.user.username = req.body.username;
    }
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
});

//Deleting one user
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({
            message: 'deleted user'
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// Middleware, common to all find by Id
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({
                message: 'cannot find the user',
            });
        }
    } catch(error) {
        res.status(404).json({
            message: error.message
        });
    }
    res.user = user;
    console.log(user.username);
    next();
}

module.exports = router;