const User = require("../Model/user");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const key = config.get("jwtKey");
const uuidv4 = require("uuid/v4");
const nodeMailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { validationResult } = require("express-validator");

// Update Photo
exports.updatePhoto = async (req, res) => {
  try {
    console.log(req.file);
    const user = await User.findById(req.user);

    const currentPath = user.image;
    user.image = `uploads/${req.file.filename}`;

    if (currentPath != "default.png") {
      console.log("Deleting ", currentPath);
      fs.unlink(currentPath, err => {
        if (err) {
          console.log(err);
        }
      });
    }
    await user.save();
    res.json({
      msg: "Image Uploaded Successfully"
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Server Error"
    });
  }
};

exports.likeProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    const profile = await User.findById(userId);

    if (!profile) {
      return res.json(404).json({
        error: "Profile Not Found"
      });
    }

    const user = await User.findById(req.user);

    if (!user) {
      return res.status(404).json({
        error: "Couldn't Verify you, Please Login again"
      });
    }

    if (
      user.likedProfiles.filter(
        prof => prof.toString() === profile._id.toString()
      ) > 1
    ) {
      return res.status(400).json({
        error: "Profile Already Liked"
      });
    }

    user.likedProfiles.push(profile._id);
    user.logs.push({
      message: "You liked a profile",
      date: new Date().getTime
    });

    await user.save();

    return res.status(200).json({
      msg: "Profile Liked"
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      res.status(400).json({
        error: `No Profile found`
      });
    }
    console.log(error.message);
    res.status(500).json({
      error: "Server Error"
    });
  }
};

exports.unlikeProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    const profile = await User.findById(userId);

    if (!profile) {
      return res.json(404).json({
        error: "Profile Not Found"
      });
    }

    const user = await User.findById(req.user);

    if (!user) {
      return res.status(404).json({
        error: "Couldn't Verify you, Please Login again"
      });
    }

    if (
      user.likedProfiles.filter(
        prof => prof.toString() === profile._id.toString()
      ) === 0
    ) {
      return res.status(400).json({
        error: "Profile Not Liked Yet"
      });
    }

    const profileIndex = user.likedProfiles.findIndex(prof => prof === userId);

    user.likedProfiles.splice(profileIndex, 1);
    user.logs.push({
      message: "You liked a profile",
      date: new Date().getTime
    });

    await user.save();

    return res.status(200).json({
      msg: "Profile Liked"
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      res.status(400).json({
        error: `No Profile found`
      });
    }
    console.log(error.message);
    res.status(500).json({
      error: "Server Error"
    });
  }
};

exports.getAllLikedProfiles = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(404).json({
        error: "Couldn't Verify you, Please Login again"
      });
    }

    return res.status(200).json({
      msg: user.likedProfiles
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Server Error"
    });
  }
};

exports.getAllLikedPosts = async (req, res) => {
  try {

    const user = await User.findById(req.user);

    if (!user) {
      return res.status(404).json({
        error: "Couldn't Verify you, Please Login again"
      });
    }

    return res.status(200).json({
      msg: user.likedPosts
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Server Error"
    });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const id = req.params.id || req.user;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        error: "Couldn't Verify you, Please Login again"
      });
    }

    const responseUser = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      dob: user.dob,
      logs: user.logs,
      image: user.image,
      likedProfiles: user.likedProfiles,
      likedPosts: user.likedPosts,
      totalPosts: user.totalPosts,
      created: user.created_at
    };

    return res.status(200).json({
      user: responseUser
    });
  } catch (error) {}
};
