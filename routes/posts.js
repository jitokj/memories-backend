const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPosts,
  updatePosts,
  deletePost,
  likePost,
} = require("../controllers/posts");

router.get("/", getPosts);
router.post("/", createPosts);

router.patch("/:id", updatePosts);

router.delete("/:id", deletePost);

router.patch("/:id/likePost", likePost);

module.exports = router;
