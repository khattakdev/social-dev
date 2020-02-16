const express = require("express");
const userController = require("../Controller/user");
const router = express.Router();
const multer = require("multer");
const { body } = require("express-validator");
const isAuth = require("../Middleware/auth");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().getTime() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 3
  },
  fileFilter
});

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
router.post("/like/:userId", isAuth, userController.likeProfile);
router.post("/unlike/:userId", isAuth, userController.unlikeProfile);
router.post(
  "/update/photo",
  isAuth,
  upload.single("image"),
  userController.updatePhoto
);

module.exports = router;
