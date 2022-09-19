// userName: req.body.name,
// email: req.body.email,
// password: req.body.password,
// location: req.body.location,
// fcmtoken: req.body.fcmtoken,
// captcha: req.body.captcha,
// referal: req.body.captcha,

// const joi = require("joi");
// const { JoiPassword } = require("joi-password");
// module.exports = {
//   getenc: (data) => {
//     const schema = joi.object({ enc: joi.string().required() });
//     return schema.validate(data);
//   },
//   register: (data) => {
//     const schema = joi.object({
//       username: joi.string().min(6).max(20).required(),
//       phone: joi
//         .string()
//         .min(12)
//         .max(12)
//         .pattern(/^[0-9]{2}[6-9]{1}[0-9]{9}$/)
//         .required(),
//       password: JoiPassword.string()
//         .min(8)
//         .max(12)
//         .minOfLowercase(1)
//         .noWhiteSpaces()
//         .required()
//         .messages({
//           "password.minOfLowercase":
//             "password contains atleast 1 lowercase letter",
//           "password.minOfNumeric": "password contains atleast 1 number",
//           "password.noWhiteSpaces": "password doestnot contains any space",
//         }),
//       location: joi.string().required(),
//       captcha: joi.string().required(),
//       fcmtoken: joi.string().required(),
//       referal: joi.string().empty().optional(),
//     });
//     return schema.validate(data);
//   },
// };

//const bodyparser = require("body-parser");
//const cookieParser = require("cookie-parser");
//const db = require("./config/config").get(process.env.NODE_ENV);

//app.use(bodyparser.urlencoded({ extended: false }));
//app.use(bodyparser.json());
//app.use(cookieParser());
