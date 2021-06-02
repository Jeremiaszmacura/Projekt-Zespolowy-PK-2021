const jwt = require('jsonwebtoken');

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).json('You have to be logged in first.');

    const data = jwt.verify(token, process.env.TOKEN_SECRET)
        .catch((err) => {
            console.log(err);
        });

    if (!data) return res.sendStatus(403).json('Something is wrong with token.');

    req.user = data

    next()
}

module.exports = {
    authenticateToken
};