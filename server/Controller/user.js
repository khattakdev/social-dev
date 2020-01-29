const User = require("../Model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const key = config.get("jwtKey");
const uuidv4 = require("uuid/v4");
const nodeMailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { check, validationResult } = require("express-validator");

const transporter = nodeMailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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"
    }
  })
);

// Update Password

exports.updatePassword = async (req, res) => {
  const { verificationCode } = req.params;
  const { password, confirmPassword } = req.body;

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
    const user = await User.findOne({
      "passwordRecovery.verificationCode": verificationCode
    });

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "You Password doesn't Match."
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;

    await user.save();

    res.status(200).json({
      msg: "Password Successfully Recovered"
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Server Error"
    });
  }
};

// Only Verify, if the verification code is not fake

exports.verifyCorrectRecoveryLink = async (req, res) => {
  const { verificationCode } = req.params;

  try {
    const user = await User.findOne({
      "passwordRecovery.verificationCode": verificationCode
    });

    if (!user) {
      return res.status(404).json({
        error: "Invalid URL"
      });
    }

    return res.status(200).json({
      msg: "Valid Recovery Request"
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Server Error"
    });
  }
};

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    console.log(email);
    if (!user) {
      return res.status(404).json({
        error: "Invalid Email"
      });
    }

    const currentTime = new Date();
    console.log(new Date(user.passwordRecovery.lastSent).setDate(1));
    const newDateForDB = new Date().setDate(
      new Date(user.passwordRecovery.lastSent).getDate() + 1
    );

    if (currentTime > new Date(newDateForDB)) {
      const verificationCode = uuidv4();
      user.passwordRecovery = {
        ...user.passwordRecovery,
        verificationCode,
        lastSent: new Date()
      };

      await user.save();

      await transporter.sendMail({
        to: email,
        from: "no-reply@devtalk.ml",
        subject: "Password Recovery",
        html: `<p>Please <a href="www.devtalk.ml/user/recovery/${verificationCode}"> Recover your Password<p>`
      });
      return res.status(200).json({
        msg: "Recovery Email Sent!"
      });
    } else {
      return res.status(425).json({
        error: "You already Requested a Code"
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Server Error"
    });
  }
};

exports.verifyEmail = async (req, res) => {
  const { verificationCode } = req.params;
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user.verification.isVerified) {
      return res.status(200).json({
        msg: "You are Already Verified"
      });
    }
    if (!user) {
      return res.status(404).json({
        error: "Please Register Your Account"
      });
    }

    if (verificationCode === user.verification.verificationCode) {
      user.verification.isVerified = true;
      await user.save();
      return res.status(200).json({
        msg: "You are Verified Now"
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Server Error"
    });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

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
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid Email"
      });
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (matchPassword) {
      const token = jwt.sign(
        {
          id: user.id
        },
        key,
        {
          expiresIn: "1h"
        }
      );

      return res.status(200).json({
        msg: "Successfully Logged In",
        token: token
      });
    } else {
      return res.status(401).json({
        error: "Invalid Password"
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Server Error"
    });
  }
};

exports.register = async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
    gender,
    dob
  } = req.body;
  const verificationCode = uuidv4();
  const currentDate = new Date().getTime();

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
    let user = await User.findOne({ email: email });

    if (user) {
      return res.json({
        error: "User Already Exist!"
      });
    }

    if (password !== confirmPassword) {
      return res.json({
        error: "Password Doesn't Match"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      gender,
      dob,
      verification: {
        isVerified: false,
        verificationCode: verificationCode,
        lastCodeSent: currentDate
      }
    });

    await user.save();

    await transporter.sendMail({
      to: email,
      from: "no-reply@devTalk.ml",
      subject: "Email Verification Code",
      html: `<p>Please <a href="www.devtalk.ml/user/verify/${verificationCode}">Verify</a> your email</p>`
    });
    const token = jwt.sign(
      {
        id: user.id
      },
      key,
      {
        expiresIn: "1h"
      }
    );

    res.json({
      msg: "Account Successfully Created",
      token
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Server Error"
    });
  }
};
