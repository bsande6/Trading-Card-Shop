const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const { Cart, validate } = require('../models/cart');

router.post('/', async (req, res) => {
    // Check if this user already exisits
    console.log(req.body.email)
    let user = await User.findOne({email: req.body.email});
    
    //if (user.cart.items.findIndex(item => item.card.image == req.body.image)) {
        // change quantity
    //}
    // else {
    //     user.cart.items.push(item)
    // }
});

module.exports = router;