const express = require("express");
const route = express.Router();
const User = require("../models/User");

route.post("/register", async (req, res) => {
  try {
    console.log("Data", req.body);
    const name = req.body.name;
    const password = req.body.password;
    console.log("Name is ", name);
    console.log("Password is ", password);
    const search = await User.findOne({
      name,
    });
    if (search) {
      console.log("Data already exist");
      res.status(203).json("Data already exists");
    } else {
      const data = await User.create({
        username: name,
        password: password,
      });

      console.log("dTA IS ", data);
      res.status(200).json("Successful");
    }
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = route;
