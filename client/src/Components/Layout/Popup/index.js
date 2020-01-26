import React from "react";
import classes from "./index.module.scss";
import Modal from "../Modal";
const index = props => {
  return (
    <div className={classes.popup}>
      <div className={classes.popupContent}>
        <Modal
          onClick={props.onClick}
          className={props.className}
          closeIcon={props.closeIcon ? true : false}
        >
          {props.children}
        </Modal>
      </div>
    </div>
  );
};

export default index;
