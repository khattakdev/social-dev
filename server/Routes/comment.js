const express = require("express");
const router = express.Router();
const isAuth = require("../Middleware/auth");
const commentController = require("../Controller/comment");
const { body, checkSchema } = require("express-validator");

router.post(
  "/post/:postId",
  [
    isAuth,
    body("description", "Please Add Comment")
      .trim()
      .not()
      .isEmpty()
  ],
  commentController.postComment
);
router.post("/remove/:commentId", isAuth, commentController.removeComment);
router.put(
  "/edit/:commentId",
  [
    isAuth,
    body("description", "Please Add Comment")
      .trim()
      .not()
      .isEmpty()
  ],
  commentController.updateComment
);
router.get("/getall/:postId", commentController.getPostComments);

module.exports = router;
