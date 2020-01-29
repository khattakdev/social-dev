const express = require("express");
const userController = require("../Controller/user");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("email", "Invalid Email").isEmail(),
    body("firstName", "You must Enter First Name")
      .trim()
      .not()
      .isEmpty(),
    body("lastName", "You must Enter Last Name")
      .trim()
      .not()
      .isEmpty(),
    body("password", "You must Enter Password")
      .not()
      .isEmpty(),
    body("gender", "You must Select Gender")
      .not()
      .isEmpty(),
    body("dob", "You must Select Date of Birth")
      .not()
      .isEmpty()
  ],
  userController.register
);
router.post(
  "/login",
  [
    body("email", "Invalid Email").isEmail(),
    body("password", "Invalid Password")
      .not()
      .isEmpty()
  ],
  userController.login
);
router.post("/verify/:verificationCode", userController.verifyEmail);
router.post("/forgetpassword", userController.forgetPassword);
router.get(
  "/recovery/:verificationCode",
  userController.verifyCorrectRecoveryLink
);
router.put(
  "/recovery/update/:verificationCode",
  body("password", "Passwould must be minimum of 6 Characters").isLength({
    min: 6
  }),
  userController.updatePassword
);

module.exports = router;
