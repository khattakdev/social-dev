const express = require("express");
const connectDB = require("./config/db");
// Routes
const userRoute = require("./Routes/user");
const postRoute = require("./Routes/post");
const commentRoute = require("./Routes/comment");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use("/uploads/", express.static("uploads"));

app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);

connectDB(() => {
  app.listen(8080);
});
