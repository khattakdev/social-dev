const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "http://localhost:8080/uploads/default.png",
      require,
    },
    logs: [
      {
        message: {
          type: String,
          require,
        },
        date: {
          type: Date,
          require,
        },
      },
    ],
    dob: {
      type: Date,
      required: true,
    },
    likedProfiles: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    likedPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Posts",
      },
    ],
    totalPosts: {
      type: Number,
      default: 0,
    },
    passwordRecovery: {
      verificationCode: {
        type: String,
      },
      lastSent: {
        type: Date,
        default: new Date().setFullYear(0, 1, 1),
      },
    },
    verification: {
      isVerified: {
        type: Boolean,
        require,
        default: false,
      },
      verificationCode: {
        type: String,
      },
      lastCodeSent: {
        type: Date,
        require,
      },
    },
    about: {
      type: String,
      default: "Write Something about you",
    },
    education: [
      {
        institute: {
          type: String,
          require,
        },
        from: {
          type: Date,
          require,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: true,
        },
        current: {
          type: Boolean,
          default: true,
        },
        description: {
          type: "String",
        },
      },
    ],
    employment: [
      {
        company: {
          type: String,
          require,
        },
        from: {
          type: Date,
          require,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: true,
        },
        description: {
          type: "String",
        },
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", userSchema);
