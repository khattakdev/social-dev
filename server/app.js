const express = require("express");
const connectDB = require("./config/db");
// Routes
const userRoute = require("./Routes/user");
const postRoute = require("./Routes/post");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/post", postRoute);
// app.get("/", async (req, res) => {
//   console.log("Home Page");

//   try {
//     const user = new User({
//       email: "ekhattak",
//       firstName: "arsalan",
//       lastName: "Khattak",
//       password: "12345",
//       dob: "12/03/1999",
//       gender: "male"
//     });

//     await user.save();
//     console.log("New User Created");
//   } catch (error) {
//     console.log(error.message);
//   }

//   res.json({
//     message: "A dummy Home Page"
//   });
// });

connectDB(() => {
  app.listen(8080, () => console.log("App Started"));
});
