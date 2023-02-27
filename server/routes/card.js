const { Card, validate } = require('../models/card');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let card = new Card({
        image: req.body.image,
        description: req.body.description,
        price: req.body.price
    });

    await card.save();
    res.send(card);
});

// router.get('/', async (req, res) => {
//     const { error } = validate(req.body);
    
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }

//     let card = await Card.find({ email: req.body.email});
//     if (user) {
//         if (req.body['password'] == user['password']) {
//             console.log("h")
//             return res.status(200).send("Successfully authenticated")
//         }
//         res.status(400).send('That user does not exist')
//     } else {
//         return res.status(400).send('That user does not exist');
//     }
// });

module.exports = router;