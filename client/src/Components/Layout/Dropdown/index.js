import React from "react";
import classes from "./index.module.scss";

const index = props => {
  return (
    <select
      className={[classes.select, props.className].join(" ")}
      id={props.id}
      name={props.name}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      {props.values.map(value => (
        <option key={value.val} value={value.val}>
          {value.value}
        </option>
      ))}
      {/* <option value={props.val}>{props.value}</option>
      <option value={props.val}>{props.value}</option>
      <option value={props.val}>{props.value}</option> */}
    </select>
  );
};

export default index;
