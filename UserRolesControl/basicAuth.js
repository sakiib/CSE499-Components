function authUser(req, res, next) {
    if (req.user == null) {
        res.status(403);
        return res.send('you need to signin first');
    } 
    next();
}

function authRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            res.status(401);
            return res.send('not allowed for users except admin');
        }
        next();
    }
}

module.exports = {
    authUser,
    authRole
}