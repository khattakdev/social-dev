const express = require("express");
const Router = express.Router();
const isAuth = require("../Middleware/auth");
const postController = require("../Controller/post");

Router.post("/new", isAuth, postController.newPost);
Router.post("/delete/:id", isAuth, postController.deletePost);
Router.post("/edit/:id", isAuth, postController.editPost);
Router.post("/like/:id", isAuth, postController.postLike);
module.exports = Router;
