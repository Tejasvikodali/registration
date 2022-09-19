const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const express = require("express");
const fetch = require("node-fetch");
//import fetch from "node-fetch";
const redis = require("redis");
//crud
const port = process.env.PORT || 3200;
//const redis_port = process.env.PORT || 6379;

const client = redis.createClient();
client.connect();
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
app.post("/repos", async (req, res) => {
  const data = { name: "Hello sdvjdbsjvbdsjb jdbvjdbjk", email: "vbfbfbj" };

  client.HSET("Register", "Teju", JSON.stringify(data));

  var getdat = await client.HGET("Register", "Teju");
  console.log(getdat);
  res.status(200).send(getdat);
});
app.post("/check", async (req, res) => {
  client.set = ("framework", "ReactJS");
  var getinfo = await client.get("framework");
  console.log(getinfo);
  res.status(200).send(getinfo);
});
app.post("/hashstring", async (req, res) => {
  client.HSET("frameworks_hash", {
    javascript: "ReactJS",
    css: "TailwindCSS",
    node: "Express",
  });
  const reply = await client.exists("framework", function (err, reply) {
    if (reply === 1) {
      console.log("Exists!");
    } else {
      console.log("Doesn't exist!");
    }
  });
  //client.del("frameworks_hash");
  var object = await client.HGETALL("frameworks_hash");
  client.set("working_days", 5);
  console.log(object);
  res.status(200).send(object);
});
app.post("/list", async (req, res) => {
  client.LPUSH(["frameworks_list", "ReactJS", "Angular"]);
  var reply = await client.LRANGE("frameworks_list", 0, -1);
  console.log(reply); // [ 'ReactJS', 'Angular' ]
  res.status(200).send(reply);
});

app.post("/set", async (req, res) => {
  client.SADD([
    "frameworks_set",
    "ReactJS",
    "Angular",
    "Svelte",
    "VueJS",
    "VueJS",
  ]);
  var reply = await client.SMEMBERS("frameworks_set");
  console.log(reply);
  res.status(200).send(reply);
});
app.post("/status", async (req, res) => {
  client.set("status", "logged_in");
  var result = await client.get("status");
  console.log(result);
  res.status(200).send(result);
});
app.post("/increment", async (req, res) => {
  client.set("working_days", 5);
  var work = await client.incr("working_days");
  console.log(work);
  res.json(work);
});
app.post("/decrement", async (req, res) => {
  client.set("working_days", 5);
  var workred = await client.decr("working_days");
  console.log(workred);
  res.json(workred);
});
app.post("/listredis", async (req, res) => {
  client.RPUSH(["frameworks_list", "ReactJS", "Angular"]);
  const reply = await client.LRANGE("frameworks_list", 0, -1);
  console.log(reply);
});

app.post("/path", async (req, res) => {
  const data = { name: "Tejasvi", phone: "teju", email: "tejasvi@gmail.com" };
  await client.HSET("Register", "teju", JSON.stringify(data));
  //const result = await
  client.HGET("Register", "teju", (err, value) => {
    if (err) console.log(err);
    else console.log(value);
  });

  const reply = await client.exists("Register", "teju", function (err, reply) {
    if (reply === 1) {
      res.status(200).send(result);
    } else {
      console.log("Doesn't exist!");
    }
  });
  console.log(reply);
  console.log(result);
  res.status(200).send(result);
});

//res.json(reply);
