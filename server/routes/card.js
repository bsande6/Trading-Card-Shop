const { Card, validate } = require('../models/card');
const express = require('express');
const router = express.Router();
var fs = require('fs');
// image file system
var multer = require('multer');
var path = require('path');
const { User } = require('../models/user');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './server/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({storage: storage});

router.post('/', upload.single("myImage"), async (req, res) => {
    const { error } = validate(req.body);
    if (error) { 
        return res.status(400).send(error.details[0].message);
    }
    let user = await User.findOne({ email: req.body.email});
    // fs.writeFile(path.join(__dirname + '/../uploads/' + req.body.filename), , function (err) {
    //   if (err) throw err;               console.log('Results Received');
    // }); 
    let card = new Card({
        description: req.body.description,
        price: req.body.price,
        image: path.join(__dirname + '/../uploads/' + req.body.filename),
        owner: user
    });

    user.cards.push(card._id)
    await card.save();
    await user.save()
    res.send(card)
});

router.get('/all_cards', async (req, res) => {
  let cards = await Card.find()
  console.log(cards)
  res.json(cards)
});

module.exports = router;