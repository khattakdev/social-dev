import React from "react";
import classes from "./index.module.scss";

const index = props => {
  return (
    <div
      style={props.rounded ? { borderRadius: "5px" } : null}
      className={[classes.card, props.className].join(" ")}
    >
      {props.children}
    </div>
  );
};

export default index;
