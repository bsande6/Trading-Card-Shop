const { Card, validate } = require('../models/card');
const express = require('express');
const router = express.Router();
var fs = require('fs');
// image file system
var multer = require('multer');
var path = require('path');
const { User } = require('../models/user');
const { faUserAstronaut } = require('@fortawesome/free-solid-svg-icons');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage });

router.post('/', upload.single("myImage"), async (req, res) => {
    const { error } = validate(req.body);
    console.log(req.body)
    console.log(error)
    if (error) { 
        return res.status(400).send(error.details[0].message);
    }
    let user = await User.findOne({ email: req.body.email});
    console.log("user", user)
    let card = new Card({
        description: req.body.description,
        price: req.body.price,
        image: path.join(__dirname + '/../uploads/' + req.body.filename),
        owner: user
    });
    await card.save();
    res.send(card)
});





module.exports = router;