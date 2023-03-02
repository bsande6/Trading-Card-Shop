const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    console.log(req.body.email)
    let user = await User.findOne({email: req.body.email});
    console.log(user)
    if (user) {
        console.log("user")
        return res.status(400).send('That user already exists!');
    } else {
        console.log("new user")
        user = new User({
            email: req.body.email,
            password: req.body.password
        });
        console.log("success", user)
        await user.save();
        res.status(200).send(user);
    }
});

router.post('/auth', async (req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send('That user does not exist');
    }
    let user = await User.findOne({ email: req.body.email});
    console.log(user)
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
    let cards = await User.findOne({ email: req.query.email}).populate("cards");
    res.json(cards)
});

router.get('/all_cards', async (req, res) => {
    let cards = await User.find().populate("cards");
    console.log(cards)
    res.json(cards)
});

module.exports = router;