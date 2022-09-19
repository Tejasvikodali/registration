const Joi = require("joi");
const mongoose = require("mongoose");
const User = mongoose.model(
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
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
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
// module.exports = {
//   getenc: (data) => {
//     const schema = joi.object({ enc: joi.string().required() });
//     return schema.validate(data);

//function validateUser(user) {
function register(data) {
  const schema = Joi.object({
    // uniqueId: Joi.string().required(),
    userId: Joi.string().min(5).max(50),
    userName: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(5).max(255).required(),
    location: Joi.string().min(5).max(1024).required(),
    fcmtoken: Joi.string().min(5).max(255).required(),
    captcha: Joi.string().min(5).max(55).required(),
    referal: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(data);
}
// },
//};
exports.User = User;
exports.register = register;
//module.exports = mongoose.model("User", userSchema);
