import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrow-left.svg";
import Button from "../Button/index";
import classes from "./Auth.module.scss";
import { Link } from "react-router-dom";

const Index = props => {
  const [initialState, setFormState] = useState(true);
  return (
    <div className={props.className}>
      <div className={classes.Head}>
        <h2>Register</h2>
        {!initialState ? (
          <h5 className={classes.Back} onClick={() => setFormState(true)}>
            <ArrowLeft className={classes.SvgFocus} />
            <span>Go Back</span>
          </h5>
        ) : null}
      </div>
      {initialState ? (
        <div className={[classes.Form].join(" ")}>
          <TextField
            id="outlined-firstname-input"
            label="First Name"
            className={classes.textField}
            type="text"
            autoComplete="current-firstname"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-lastname-input"
            label="Last Name"
            className={classes.textField}
            type="text"
            autoComplete="current-lastname"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="Your Email"
            className={classes.textField}
            type="email"
            autoComplete="current-email"
            margin="normal"
            variant="outlined"
          />
          <Button
            className={classes.Button}
            onClick={() => {
              setFormState(false);
            }}
          >
            <span className={classes.ButtonText}>Continue</span>
            <Arrow className={classes.SvgFocus} />
          </Button>
        </div>
      ) : (
        <div className={[classes.Form, classes.fadein].join(" ")}>
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-text-input"
            label="Gender"
            className={classes.textField}
            type="text"
            autoComplete="current-text"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-date-input"
            label=""
            className={classes.textField}
            type="date"
            autoComplete="current-date"
            margin="normal"
            variant="outlined"
          />
          <Button onClick={props.onSignup} className={classes.Button}>
            Register
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
