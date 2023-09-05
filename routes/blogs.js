const express = require("express");
const router = express.Router();
const blog_controller = require("../controllers/blogs");

router.get("/", blog_controller.blogs);

router.post("/", blog_controller.create_blog);

router.get("/:blogId", blog_controller.get_blog);

router.put("/:blogId", blog_controller.update_blog);

router.delete("/:blogId", blog_controller.delete_blog);

module.exports = router;
