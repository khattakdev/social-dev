const express = require("express");
const userController = require("../Controller/user");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/verify/:verificationCode", userController.verifyEmail);
router.post("/forgetpassword", userController.forgetPassword);
router.get(
  "/recovery/:verificationCode",
  userController.verifyCorrectRecoveryLink
);
router.put("/recovery/update/:verificationCode", userController.updatePassword);

module.exports = router;
