const User = require("../Model/user");
const Post = require("../Model/post");
const { validationResult } = require("express-validator");
function onError(res, error) {
  if (error.kind === "ObjectId") {
    res.status(400).json({
      error: "No Post found"
    });
  }
  console.log(error.message);
  res.status(500).json({
    error: "Server Error"
  });
}

exports.getPosts = async (req, res) => {
  try {
    const id = req.params.id || req.user;
    let posts = await Post.find({ user: id });
    posts = posts.reverse();
    res.status(200).json({
      msg: posts
    });
  } catch (error) {}
};
exports.newPost = async (req, res) => {
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
    const { description } = req.body;

    const post = new Post({
      user: req.user,
      description
    });

    const user = await User.findById(req.user);

    if (!user) {
      res.status(404).json({
        error: "User not found"
      });
    }

    user.logs.unshift({
      message: "You created a new post",
      date: new Date()
    });
    user.totalPosts++;

    await post.save();
    await user.save();

    let posts = await Post.find({ user: req.user }).select("-__v");
    posts = posts.reverse();
    return res.status(200).json({
      msg: "Post Created Successfully",
      posts
    });
  } catch (error) {
    onError(res, error);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        error: "Invalid Post"
      });
    }

    const user = await User.findById(req.user);

    if (post.user.toString() != user._id.toString()) {
      return res.status(401).json({
        error: "Unauthorized"
      });
    }

    console.log("Reached at CP 1");
    await user.logs.push({
      message: "You deleted a post",
      date: new Date().getTime()
    });

    await user.totalPosts--;

    await post.remove();
    await user.save();
    return res.status(200).json({
      msg: "Post Deleted Successfully"
    });
  } catch (error) {
    onError(res, error);
  }
};

// Edit 📮
exports.editPost = async (req, res) => {
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
    const postId = req.params.id;
    const { description } = req.body;
    if (!description) {
      return res.json({
        error: "No Description Available"
      });
    }
    const post = await Post.findById(postId);

    const user = await User.findById(req.user);

    user.logs.push({
      message: "You edited a post",
      date: new Date().getTime
    });

    if (!post) {
      return res.status(404).json({
        error: "Invalid Post"
      });
    }

    if (post.user.toString() != req.user.toString()) {
      return res.status(401).json({
        error: "Unauthorized"
      });
    }

    post.description = description;

    await post.save();
    await user.save();

    return res.status(200).json({
      msg: "Post Updated Successfully"
    });
  } catch (error) {
    onError(res, error);
  }
};

// 💙💙💙
exports.postLike = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (
      post.likes.filter(like => like.toString() === req.user.toString())
        .length > 0
    ) {
      return res.status(400).json({
        error: "Post Already Liked"
      });
    }

    const user = await User.findById(req.user);

    user.logs.push({
      message: "You liked a post",
      date: new Date().getTime()
    });

    post.likes.push(req.user);
    user.likedPosts.push(post._id);

    await post.save();
    await user.save();
    return res.status(200).json({
      error: "Post Liked"
    });
  } catch (error) {
    onError(res, error);
  }
};
//  💔💔💔
exports.removeLike = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        error: "Post not found"
      });
    }

    if (
      post.likes.filter(like => like.toString() === req.user.toString())
        .length == 0
    ) {
      return res.status(400).json({
        error: "Post Not Liked"
      });
    }

    const user = await User.findById(req.user);

    if (!user) {
      return req.status(404).json({
        error: "User not found"
      });
    }

    const userIndex = user.likedPosts.findIndex(
      post => postId.toString() === post.toString()
    );
    const postIndex = post.likes.findIndex(
      user => user.toString() === req.user.toString()
    );
    user.logs.push({
      message: "You unliked a post",
      date: new Date().getTime()
    });

    post.likes.splice(postIndex, 1);
    user.likedPosts.splice(userIndex, 1);

    await post.save();
    await user.save();

    return res.status(200).json({
      error: "Post Unliked"
    });
  } catch (error) {
    onError(res, error);
  }
};
