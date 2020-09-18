const express = require('express');
const path = require('path');
const User = require('../db/models/user');
const {auth} = require('../middleware/auth');

const router = express.Router();

router.get('/me', auth, (req,res) => {
    res.send(req.user);
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.username, req.body.password);
        if (!user) {
            res.status(404).send('Could not login...')
            return;
        };
        
        const token = user.generateAuthToken();

        await user.save();
        
        res.send({
            user,
            token
        });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}) 

router.post('/logout', auth, async (req, res) => {
    try {
        const user = req.user;
        req.user.removeAuthToken(req.token);
        user.save();
    } catch (e) {
        res.status(401).send(4);
    }
})

router.post('/signin', async (req, res) => {
    try {
        const user = new User(req.body);

        const token = user.generateAuthToken();

        await user.save();

        res.status(201).send({
            user,
            token
        });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

module.exports = router