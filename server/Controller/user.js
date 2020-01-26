const User = require("../Model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const key = config.get("jwtKey");

exports.login = async (req, res) => {
  const { email, password } = req.body;

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
      dob
    });

    await user.save();

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
