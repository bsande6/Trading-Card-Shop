const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card"
  }]
}));

function validateUser(user) {
  const schema = Joi.object({
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
  });
  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser