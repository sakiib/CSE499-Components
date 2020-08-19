const jwt = require('jsonwebtoken');

// Middleware function for any route to be protected

function auth (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('access denied');

    try {
        const verified = jwt.verified(token, process.env.JWT_SECRET);
        req.user = verified;
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}