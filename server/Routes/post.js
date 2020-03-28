const express = require("express");
const router = express.Router();
const isAuth = require("../Middleware/auth");
const postController = require("../Controller/post");
const { body } = require("express-validator");

router.get("/getall/:id?", isAuth, postController.getPosts);
router.post(
  "/new",
  [
    isAuth,
    body("description", "You must Provide Description")
      .trim()
      .not()
      .isEmpty()
  ],
  postController.newPost
);
router.delete("/delete/:id", isAuth, postController.deletePost);
router.post(
  "/edit/:id",
  [
    isAuth,
    body("description", "You must Provide Description")
      .trim()
      .not()
      .isEmpty()
  ],
  postController.editPost
);
router.post("/like/:id", isAuth, postController.postLike);
router.post("/unlike/:id", isAuth, postController.removeLike);
module.exports = router;
