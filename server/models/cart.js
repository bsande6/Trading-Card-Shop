const Joi = require('joi');
const mongoose = require('mongoose');

const Item = new mongoose.Schema({
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card"
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity can not be less then 1.']
  },
});

const Cart = mongoose.model('Cart', new mongoose.Schema({
    items: [Item],
    subTotal: {
        default: 0,
        type: Number
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
  }));

exports.Cart = Cart;