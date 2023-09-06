const express = require("express");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const User = require("../models/user");
//const passport = require("passport");
//const bcrypt = require("bcryptjs");

exports.users = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json({ users }); 
});

exports.create_user = asyncHandler(async (req, res) => {
  console.log(req.body.email);
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();

  res.json(user);
})
