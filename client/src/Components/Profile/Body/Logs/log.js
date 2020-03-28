import React from "react";
import classes from "./index.module.scss";
import { Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";

const index = props => {
  return (
    <>
      <Typography className={classes.log} component="p" variant="p">
        {props.children}
        <Moment format="DD-MM-YYYY">{props.date}</Moment>
      </Typography>
      <Divider />
    </>
  );
};

export default index;
