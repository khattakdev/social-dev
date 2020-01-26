import React, { Fragment } from "react";
import { Card, Divider } from "@material-ui/core";
import classes from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import Button from "../../../../Layout/Button";
import TextField from "../../../../Layout/TextArea";
import CardContent from "@material-ui/core/CardContent";
// import Comments from './Comments'

const Index = props => {
  return (
    <Fragment>
      <Divider />
      <Typography className={classes.comment} component="div">
        <img className={classes.image} src={props.image} alt="Profile" />
        <div className={classes.comment__Context}>
          <p>
            <span>
              <strong>Arsalan</strong>
            </span>{" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </p>
        </div>
      </Typography>
    </Fragment>
  );
};

export default Index;
