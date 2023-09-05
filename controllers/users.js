const express = require("express");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const User = require("../models/user");
//const passport = require("passport");
//const bcrypt = require("bcryptjs");

exports.users = asyncHandler(async (req, res) => {
  const user = new User({
    email: "test@t",
    password: "testpass",
  });

  await user.save();

  res.json({ user }); 
});
