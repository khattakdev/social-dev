import React, { Fragment } from "react";
import { Card } from "@material-ui/core";
import classes from "./index.module.scss";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit.svg";
const index = props => {
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Typography
            className={classes.aboutHead}
            component="div"
            align="right"
          >
            <span></span>
            <h2>Basic Info</h2>
            <EditIcon onClick={props.editClick} className={classes.icon} />
          </Typography>
          <Divider />
          <Typography component="div" className={classes.info}>
            <h4>Total Posts:</h4>
            <p>5</p>
          </Typography>
          <Typography component="div" className={classes.info}>
            <h4>Creation Date:</h4>
            <p>19 November, 2019</p>
          </Typography>
          <Typography component="div" className={classes.info}>
            <h4>Lives in:</h4>
            <p>Islamabad</p>
          </Typography>
          <Typography component="div" className={classes.info}>
            <h4>Gender:</h4>
            <p>Male</p>
          </Typography>
          <Typography component="div" className={classes.info}>
            <h4>Status:</h4>
            <p>UI/UX Designer</p>
          </Typography>
          <Typography component="div" className={classes.info}>
            <h4>Company</h4>
            <p>MetaLab Agency</p>
          </Typography>
          <Typography component="div" className={classes.info}>
            <h4>Website</h4>
            <p>www.metalab.com</p>
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default index;
