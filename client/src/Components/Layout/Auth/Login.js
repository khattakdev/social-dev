import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/index";
import classes from "./Auth.module.scss";
const Index = props => {
  return (
    <div className={classes.fadein}>
      <h2>Login</h2>

      <div className={classes.Form}>
        <TextField
          id="outlined-email-input"
          label="Your Email"
          name="email"
          className={classes.textField}
          type="email"
          autoComplete="current-email"
          margin="normal"
          variant="outlined"
          value={props.values.email.value}
          onChange={e => props.onChangeHandler(e)}
        />
        <TextField
          id="outlined-password-input"
          label="Your Password"
          className={classes.textField}
          type="password"
          name="password"
          autoComplete="current-password"
          margin="normal"
          value={props.values.password.value}
          onChange={e => props.onChangeHandler(e)}
          variant="outlined"
        />
        <span className={classes.ForgotPassword}>Forgot password?</span>
        <Button onClick={props.onLogin} className={classes.Button}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Index;
