const express = require("express");
const userController = require("../Controller/user");
const router = express.Router();
const multer = require("multer");
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

router.post("/like/:userId", isAuth, userController.likeProfile);
router.post("/unlike/:userId", isAuth, userController.unlikeProfile);
router.post(
  "/update/photo",
  isAuth,
  upload.single("image"),
  userController.updatePhoto
);

router.get("/get/:id?", isAuth, userController.getUserData);

module.exports = router;
