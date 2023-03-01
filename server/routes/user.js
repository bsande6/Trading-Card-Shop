const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).send('That user already exists!');
    } else {
        user = new User({
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.send(user);
    }
});

router.post('/auth', async (req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email});
    if (user) {
        if (req.body['password'] == user['password']) {
            return res.status(200).send("Successfully authenticated")
        }
        res.status(400).send('That user does not exist')
    } else {
        return res.status(400).send('That user does not exist');
    }
});

router.get('/cards', async (req, res) => {
    console.log(req.query)
    let cards = await User.findOne({ email: req.query.email}).populate("cards");
    res.json(cards)
});

module.exports = router;