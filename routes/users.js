const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, register } = require("../model/user");
const express = require("express");
const router = express.Router();
const Joi = require("joi");
var uuid = require("uuid");

router.post("/reg", async (req, res) => {
  // First Validate The Request
  const { error } = register(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if this user already exisits
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("That user already exisits!");
  } else {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    var uid = uuid.v4();
    console.log(uuid.v4());
    // Insert the new user if they do not exist yet
    user = new User({
      userId: uid,
      userName: req.body.userName.toLowerCase(),
      phone: req.body.phone,
      email: req.body.email,
      password: password,
      location: req.body.location,
      fcmtoken: req.body.fcmtoken,
      captcha: req.body.captcha,
      referal: req.body.referal,
    });

    await user.save();
    //return res.send(user);
    res.send(
      _.pick(user, [
        //"userId",
        "userName",
        "phone",
        "email",
        "password",
        "location",
        "fcmtoken",
        "captcha",
        "referal",
      ])
    );
  }
});

module.exports = router;
