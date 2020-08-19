const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        posts: {
            'title': 'my first post',
            'description': "my very first post is here"
        }
    });
});


module.exports = router;