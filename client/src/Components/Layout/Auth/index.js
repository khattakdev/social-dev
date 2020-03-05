import React, { useState } from "react";
import { ReactComponent as LoginIcon } from "../../../assets/icons/login.svg";
import { ReactComponent as RegisterIcon } from "../../../assets/icons/register.svg";
import Login from "./Login";
import Signup from "./Signup";
import classes from "./Auth.module.scss";

const Index = props => {
  return (
    <div className={classes.Auth}>
      <div className={classes.AuthSwitch}>
        <button
          className={
            props.authState
              ? classes.AuthButtonActive
              : classes.AuthButtonDeactive
          }
          onClick={props.tweakAuth}
        >
          <LoginIcon
            className={props.authState ? classes.SvgFocus : classes.Svg}
          />
        </button>
        <button
          className={
            props.authState
              ? classes.AuthButtonDeactive
              : classes.AuthButtonActive
          }
          onClick={props.tweakAuth}
        >
          <RegisterIcon
            className={props.authState ? classes.Svg : classes.SvgFocus}
          />
        </button>
      </div>

      <div className={classes.AuthContent}>{props.children}</div>
    </div>
  );
};

export default Index;
