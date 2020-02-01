const User = require("../Model/user");
const Post = require("../Model/post");

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
exports.newPost = async (req, res) => {
  try {
    const { description } = req.body;

    const post = new Post({
      user: req.user,
      description
    });
    await post.save();

    return res.status(200).json({
      msg: "Post Created Successfully"
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

    await post.remove();

    return res.status(200).json({
      msg: "Post Deleted Successfully"
    });
  } catch (error) {
    onError(res, error);
  }
};

exports.editPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { description } = req.body;
    if (!description) {
      return res.json({
        error: "No Description Available"
      });
    }
    const post = await Post.findById(postId);

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

    return res.status(200).json({
      msg: "Post Updated Successfully"
    });
  } catch (error) {
    onError(res, error);
  }
};

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

    post.likes.push(req.user);

    await post.save();

    return res.status(200).json({
      error: "Post Liked"
    });
  } catch (error) {
    onError(res, error);
  }
};
