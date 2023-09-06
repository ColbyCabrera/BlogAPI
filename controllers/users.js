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
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();

  res.json(user);
});

exports.get_user = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json({ user });
});

exports.update_user = asyncHandler(async (req, res) => {
  // Create a category object with escaped and trimmed data.
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    _id: req.params.id,
  });

  // Check if category already exists
  const updatedUser = await User.findByIdAndUpdate(req.params.id, user, {});

  // user saved, redirect to detail page.
  res.json({ updatedUser });
});

exports.delete_user = asyncHandler(async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  res.json({ deletedUser });
});
