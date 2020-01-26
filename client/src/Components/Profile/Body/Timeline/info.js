import React, { Fragment } from "react";
import { Card } from "@material-ui/core";
import classes from "./index.module.scss";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
const index = () => {
  return (
    <Fragment>
      <Card className={classes.infoCard}>
        <CardContent>
          <Typography component="div" align="center">
            <h2>Profile Info</h2>
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
            <h4>About:</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tempora esse quod doloremque. Quidem incidunt exercitationem quam
              necessitatibus, officiis neque.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default index;
