import React from "react";
import classes from "./Button.module.scss";
const index = props => {
  return (
    <button
      type="button"
      className={[
        classes.Button,
        props.className,
        props.disabled === true ? classes.disabled : ""
      ].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default index;
