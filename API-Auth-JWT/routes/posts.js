const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            'title': 'my first post',
            'description': "my very first post is here"
        }
    });
});


module.exports = router;