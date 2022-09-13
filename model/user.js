const Joi = require("Joi");
const mongoose = require("mongoose");
const user = mongoose.model(
  "User",
  new mongoose.Schema({
    userId: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    userName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    phone: {
      type: Number,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    location: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
    fcmtoken: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    captcha: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 55,
    },
    referal: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
  })
);

function validateUser(user) {
  const schema = {
    userId: Joi.string().min(5).max(50).required(),
    userName: Joi.string().min(5).max(50).required(),
    phone: Joi.number().min(5).max(50).required(),
    password: Joi.string().min(5).max(255).required(),
    location: Joi.string().min(5).max(1024).required(),
    fcmtoken: Joi.string().min(5).max(255).required(),
    captcha: Joi.string().min(5).max(55).required(),
    referal: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(user, schema);
}
exports.User = user;
exports.validateUser = validateuser;
//module.exports = mongoose.model("User", userSchema);
