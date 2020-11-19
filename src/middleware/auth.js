const jwt = require('jsonwebtoken')
const User = require('../db/models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.get("Authorization");
        const user = await getUserFromToken(token)
        if (!user)
        {
            throw new Error('Authentification failed.')
        }

        req.token = token
        req.user = user

        next();
    } catch (e) {
        res.status(401).send('Authentification failed.')
    }
}

const getUserFromToken = async (token) => {
    if (!token)
    {
        return undefined
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findOne({ _id: decoded._id, username: decoded.username })

    return user
}

const isTokenValid = async (token) => {
    try {
        const user = await getUserFromToken(token)
        
        return user ? true : false;
    } catch (e) {
        return false;
    }
}

module.exports = {
    auth,
    isTokenValid,
}