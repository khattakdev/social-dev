import React, { useState } from "react";
import { ReactComponent as LoginIcon } from "../../../assets/icons/login.svg";
import { ReactComponent as RegisterIcon } from "../../../assets/icons/register.svg";
import Login from "./Login";
import Signup from "./Signup";
import classes from "./Auth.module.scss";

const Index = () => {
  const [authState, setLogin] = useState(true);
  console.log(authState);
  return (
    <div className={classes.Auth}>
      <div className={classes.AuthSwitch}>
        <button
          className={
            authState ? classes.AuthButtonActive : classes.AuthButtonDeactive
          }
          onClick={() => setLogin(true)}
        >
          <LoginIcon className={authState ? classes.SvgFocus : classes.Svg} />
        </button>
        <button
          className={
            authState ? classes.AuthButtonDeactive : classes.AuthButtonActive
          }
          onClick={() => setLogin(false)}
        >
          <RegisterIcon
            className={authState ? classes.Svg : classes.SvgFocus}
          />
        </button>
      </div>

      <div className={classes.AuthContent}>
        {authState ? <Login /> : <Signup className={classes.fadein} />}
        {/* <Login /> */}
        {/* <Signup /> */}
      </div>
    </div>
  );
};

export default Index;
