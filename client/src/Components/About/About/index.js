import React from "react";
import { Card, Divider } from "@material-ui/core";
import classes from "../index.module.scss";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import TextField from "../../Layout/TextArea";
import Button from "../../Layout/Button";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

const education = (props) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.aboutHead} component="div" align="right">
          <span></span>
          <h2>About Me</h2>
          <span className={classes.editSpan}>
            {props.about.isEditMode ? null : (
              <EditIcon onClick={props.onClick} className={classes.icon} />
            )}
          </span>
        </Typography>
        <Divider />
        <Typography component="div" align="right"></Typography>
        <Typography component="div" className={classes.about}>
          {props.about.isEditMode ? (
            <>
              <TextField
                className={classes.aboutTextField}
                value={props.about.value}
              />
              <Typography component="div" className={classes.buttons}>
                <Button onClick={props.onClick}>Save</Button>
                <Button
                  onClick={props.onClick}
                  className={classes.buttons__discard}
                >
                  Discard
                </Button>
              </Typography>
            </>
          ) : (
            <p>{props.about.value}</p>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default education;
