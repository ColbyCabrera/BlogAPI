const express = require("express");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const Blog = require("../models/blog");
//const passport = require("passport");
//const bcrypt = require("bcryptjs");

exports.index = asyncHandler(async (req, res) => {
  res.json({ all: "all blogs" });
});

exports.create_blog = asyncHandler(async (req, res) => {
  res.json({ newBlog: "new blog" });
});

exports.get_blog = asyncHandler(async (req, res) => {
  res.json({ j: "a blog" });
});

exports.update_blog = asyncHandler(async (req, res) => {
  res.json({ j: "update a blog" });
});

exports.delete_blog = asyncHandler(async (req, res) => {
    res.json({j: "delete a blog"});
});