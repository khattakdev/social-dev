import React, { Component, Fragment } from "react";
import { Card, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import classes from "./index.module.scss";

export default class employment extends Component {
  constructor(props) {
    super(props);
  }
  // About Handlers

  render() {
    return (
      <Fragment>
        {/* <ConfirmationPop /> */}
        <Grid container className={classes.timeline} spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.employmentHead}
                  component="div"
                  align="center"
                >
                  <span></span>
                  <h2>Employment</h2>
                  <AddIcon className={classes.icon} />
                </Typography>
                <Divider />

                <Typography component="div" className={classes.employment}>
                  <Typography component="div" className={classes.employmentTop}>
                    <h4>MetaLab Agency</h4>
                    <Typography className={classes.icons} component="div">
                      <DeleteIcon className={classes.icon} />
                      <EditIcon className={classes.icon} />
                    </Typography>
                    <p>UI/UX Designer</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.employmentDate}
                  >
                    <p>2nd January - Present</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.employmentDetail}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </Typography>
                </Typography>

                <Typography component="div" className={classes.employment}>
                  <Typography component="div" className={classes.employmentTop}>
                    <h4>MetaLab Agency</h4>
                    <Typography className={classes.icons} component="div">
                      <DeleteIcon className={classes.icon} />
                      <EditIcon className={classes.icon} />
                    </Typography>
                    <p>UI/UX Designer</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.employmentDate}
                  >
                    <p>2nd January - Present</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.employmentDetail}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
