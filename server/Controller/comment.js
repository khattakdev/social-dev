const Post = require("../Model/post");
const User = require("../Model/user");
const Comment = require("../Model/comment");
const { validationResult } = require("express-validator");

function onError(res, error, type) {
  if (error.kind === "ObjectId") {
    res.status(400).json({
      error: `No ${type} found"`
    });
  }
  console.log(error.message);
  res.status(500).json({
    error: "Server Error"
  });
}

exports.postComment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorArray = errors.array().map(error => {
      return error.msg;
    });
    return res.status(422).json({
      error: errorArray
    });
  }

  try {
    const postId = req.params.postId;
    const { description } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        error: "Couldn't Find Post"
      });
    }

    const user = await User.findById(req.user);

    if (!user) {
      return res.status(401).json({
        error: "Couldn't Recognize you. Please Login again"
      });
    }

    const comment = new Comment({
      user: req.user,
      post: post._id,
      description
    });

    post.comments.push(comment._id);

    await comment.save();
    await post.save();

    return res.status(200).json({
      msg: "You Commented"
    });
  } catch (error) {
    onError(res, error, "Post");
  }
};

exports.removeComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({
        error: "Couldn't Find Comment"
      });
    }

    const user = await User.findById(req.user);

    if (!user) {
      return res.status(401).json({
        error: "Couldn't Recognize you. Please Login again"
      });
    }

    if (comment.user.toString() !== user._id.toString()) {
      return res.status(401).json({
        error: "Unauthorized to Delete Comment"
      });
    }

    await comment.remove();

    res.status(200).json({
      msg: "Comment Deleted"
    });
  } catch (error) {
    onError(res, error, "Comment");
  }
};

exports.updateComment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorArray = errors.array().map(error => {
      return error.msg;
    });
    return res.status(422).json({
      error: errorArray
    });
  }

  try {
    const commentId = req.params.commentId;
    const { description } = req.body;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({
        error: "Couldn't Find Comment"
      });
    }

    const user = await User.findById(req.user);

    if (!user) {
      return res.status(401).json({
        error: "Couldn't Recognize you. Please Login again"
      });
    }

    if (comment.user.toString() !== user._id.toString()) {
      return res.status(401).json({
        error: "Unauthorized to Edit Comment"
      });
    }

    comment.description = description;

    await comment.save();

    res.status(200).json({
      msg: "Comment Updated"
    });
  } catch (error) {
    onError(res, error, "Comment");
  }
};

exports.getPostComments = async (req, res) => {
  try {
    const postId = req.params.postId;

    const comments = await Comment.find({ post: postId });

    if (!comments) {
      return res.status(404).json({
        error: "Couldn't Find Any Comment"
      });
    }

    res.status(200).json({
      msg: comments
    });
  } catch (error) {
    onError(res, error, "Post");
  }
};
