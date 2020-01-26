import React from "react";
import classes from "./index.module.scss";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
const index = props => {
  return (
    <Card className={[classes.modal, props.className]}>
      {props.closeIcon ? (
        <CloseIcon onClick={props.onClick} className={classes.modalIcon} />
      ) : null}
      {props.children}
    </Card>
  );
};

export default index;
