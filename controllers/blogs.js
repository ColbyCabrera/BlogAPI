const express = require("express");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const Blog = require("../models/blog");
const Comment = require("../models/comment");
//const passport = require("passport");
//const bcrypt = require("bcryptjs");

exports.blogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).populate("author").populate("comments");
  console.log(blogs[1].comments);
  console.log(blogs[0].comments);
  res.json({ blogs });
});

exports.create_blog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    text: req.body.text,
  });

  await blog.save();
  res.json({ newBlog: blog });
});

exports.get_blog = asyncHandler(async (req, res) => {
  const blog = Blog.findById(req.params.id);
  res.json({ blog });
});

exports.update_blog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    text: req.body.text,
    _id: req.params.id,
  });

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, blog, {});
  res.json({ updatedBlog });
});

exports.delete_blog = asyncHandler(async (req, res) => {
  const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  res.json({ deletedBlog });
});

exports.create_comment = asyncHandler(async (req, res) => {
  const comment = new Comment({
    author: req.body.author,
    text: req.body.text,
  });

  await comment.save();

  const blog = await Blog.findById(req.params.id);

  // convert comments to array
  if (!(blog.comments instanceof Array)) {
    if (typeof blog.comments === "undefined") blog.comments = [];
    else blog.comments = new Array(blog.comments);
  }

  blog.comments.push(comment);

  const updatedBlog = new Blog({
    title: blog.title,
    author: blog.author,
    text: blog.text,
    comments: blog.comments,
    _id: req.params.id,
  });

  console.log(updatedBlog);

  result = await Blog.findByIdAndUpdate(req.params.id, updatedBlog, {});

  res.json({ updatedBlog, comment });
});
