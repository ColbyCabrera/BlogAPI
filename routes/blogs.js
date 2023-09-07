const express = require("express");
const router = express.Router();
const blog_controller = require("../controllers/blogs");

router.get("/", blog_controller.blogs);

router.post("/", blog_controller.create_blog);

router.get("/:id", blog_controller.get_blog);

router.put("/:id", blog_controller.update_blog);

router.delete("/:id", blog_controller.delete_blog);

router.post("/:id/comment", blog_controller.create_comment);

module.exports = router;
