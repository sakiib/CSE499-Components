const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Getting all users
router.get('/', (req, res) => {
    res.send('Hello All Users');
});

//Getting one user
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

//Creating one user
router.post('/', (req, res) => {
    
});

//Updating one user
router.patch('/', (req, res) => {
    
});

//Deleting one user
router.delete('/:id', (req, res) => {
    
});

module.exports = router;