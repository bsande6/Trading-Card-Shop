const {MongoClient} = require('mongodb');

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');

const users = require('./routes/user');
const cards = require('./routes/card');
const cart = require('./routes/cart');

require("dotenv").config({ path: "./config.env" });
uri = process.env.ATLAS_URI

mongoose.connect(uri)
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

//Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(cors());
app.use(express.json());

app.use('/api/users', users);
app.use('/api/cards', cards);
app.use('/api/cart', cart);

app.set("view engine", 'ejs')
app.use(express.static(`${__dirname}/uploads`))

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
