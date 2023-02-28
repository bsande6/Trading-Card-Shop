const Joi = require('joi');
const mongoose = require('mongoose');

const Card = mongoose.model('Card', new mongoose.Schema({
  image:
  {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}));

function validateCard(card) {
  // TODO validate image buffer
  const schema = Joi.object({
      file: Joi.any(),
      filename: Joi.string().min(1).max(255).required(),
      description: Joi.string().min(1).max(255).required(),
      price: Joi.number().required(),
      email: Joi.string().required()
  });
  return schema.validate(card);
}

exports.Card = Card;
exports.validate = validateCard