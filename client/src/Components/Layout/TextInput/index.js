import React from "react";
import classes from "./index.module.scss";

const index = props => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={[classes.input, props.className].join(" ")}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default index;
