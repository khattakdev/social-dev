const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      require: true
    },
    description: {
      type: String,
      require: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("Comment", commentSchema);
