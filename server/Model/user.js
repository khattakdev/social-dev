const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    passwordRecovery: {
      verificationCode: {
        type: String
      },
      lastSent: {
        type: Date,
        default: new Date().setFullYear(0, 1, 1)
      }
    },
    gender: {
      type: String,
      required: true
    },
    logs: [
      {
        message: {
          type: String,
          require
        },
        date: {
          type: Date,
          require
        }
      }
    ],
    dob: {
      type: Date,
      required: true
    },
    verification: {
      isVerified: {
        type: Boolean,
        require,
        default: false
      },
      verificationCode: {
        type: String
      },
      lastCodeSent: {
        type: Date,
        require
      }
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", userSchema);
