const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async (req, res, next) => {
  if (!req.get("Authorization")) {
    return res.status(401).json({
      error: "You must Log in"
    });
  }

  const token = req
    .get("Authorization")
    .split(" ")[1]
    .trim();

  if (!token) {
    return res.status(401).json({
      error: "You must Log in"
    });
  }

  try {
    const decodedToken = await jwt.verify(token, config.get("jwtKey"));

    req.user = decodedToken.id;
    next();
  } catch (error) {
    return res.status(500).json({
      error: "Server Error"
    });
  }
};
