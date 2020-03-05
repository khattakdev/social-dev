import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/index";
import classes from "./Auth.module.scss";
import { connect } from "react-redux";
const Index = () => {
  const login = () => {};
  return (
    <div className={classes.fadein}>
      <h2>Login</h2>

      <div className={classes.Form}>
        <TextField
          id="outlined-email-input"
          label="Your Email"
          className={classes.textField}
          type="email"
          autoComplete="current-email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Your Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <span className={classes.ForgotPassword}>Forgot password?</span>
        <Button onClick={login} className={classes.Button}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Index;
