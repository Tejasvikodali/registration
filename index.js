const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const users = require("./routes/users");
const express = require("express");
//const bodyparser = require("body-parser");
//const cookieParser = require("cookie-parser");
const db = require("./config/config").get(process.env.NODE_ENV);
const app = express();

//app.use(bodyparser.urlencoded({ extended: false }));
//app.use(bodyparser.json());
//app.use(cookieParser());

const port = process.env.PORT || 3200;

mongoose
  .connect(
    "mongodb+srv://vidlyuser:vidlypass@cluster0.7ofhy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  return res.status(200).send("Registration Welcome..!");
});

app.use(express.json());
app.use("/api/users", users);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
