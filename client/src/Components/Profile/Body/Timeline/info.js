import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Card } from "@material-ui/core";
import classes from "./index.module.scss";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
const index = (props) => {
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
            <p>{props.user.posts}</p>
          </Typography>
          <Typography component="div" className={classes.info}>
            <h4>Creation Date:</h4>
            <p>
              <Moment format="DD-MM-YYYY">{props.user.created}</Moment>
            </p>
          </Typography>
          {/* <Typography component="div" className={classes.info}>
            <h4>Lives in:</h4>
            <p>{props.user.location || "N/A"}</p>
          </Typography>
          <Typography component="div" className={classes.info}>
            <h4>About:</h4>
            <p>{props.user.about || "N/A"}</p>
          </Typography> */}
        </CardContent>
      </Card>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(index);
