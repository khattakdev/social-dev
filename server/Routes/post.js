const express = require("express");
const Router = express.Router();
const isAuth = require("../Middleware/auth");
const postController = require("../Controller/post");
const { body } = require("express-validator");

Router.get("/get", isAuth, postController.getPosts);
Router.post(
  "/new",
  [
    isAuth,
    body("description", "You must Provide Description")
      .not()
      .isEmpty()
  ],
  postController.newPost
);
Router.post("/delete/:id", isAuth, postController.deletePost);
Router.post(
  "/edit/:id",
  [
    isAuth,
    body("description", "You must Provide Description")
      .not()
      .isEmpty()
  ],
  postController.editPost
);
Router.post("/like/:id", isAuth, postController.postLike);
Router.post("/unlike/:id", isAuth, postController.removeLike);
module.exports = Router;
