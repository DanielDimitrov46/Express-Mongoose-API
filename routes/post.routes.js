const express = require('express');
const {getPosts, createPost,updatePost,deletePost} = require('../controllers/post.controller')

const router = express.Router();
router.get("/", getPosts)
router.post("/:id", createPost)
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)

module.exports = router;