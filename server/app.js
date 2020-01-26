const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.get("/", (req, res) => {
  console.log("Home Page");
  res.json({
    message: "A dummy Home Page"
  });
});

connectDB(() => {
  app.listen(8080, () => console.log("App Started"));
});
