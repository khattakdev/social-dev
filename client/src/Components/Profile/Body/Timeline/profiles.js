import React, { Fragment } from "react";
import { Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import classes from "./index.module.scss";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import image from "../../../../assets/images/dp.jpg";
const index = () => {
  return (
    <Fragment>
      <Card className={classes.profileCard}>
        <CardContent>
          <Typography component="div" align="center">
            <Box fontWeight={700} fontSize="1.6rem">
              People you may like
            </Box>
          </Typography>
          <Divider />
          <Typography component="div">
            <Box className={classes.profiles} fontSize="1.6rem">
              <img className={classes.image} src={image} alt="Profile" />
              Arslan Khattak
            </Box>
          </Typography>
          <Divider />
          <Typography component="div">
            <Box className={classes.profiles} fontSize="1.6rem">
              <img className={classes.image} src={image} alt="Profile" />
              Arsalan Khattak
            </Box>
          </Typography>
          <Divider />
          <Typography component="div">
            <Box className={classes.profiles} fontSize="1.6rem">
              <img className={classes.image} src={image} alt="Profile" />
              Arsalan Khattak
            </Box>
          </Typography>
          <Divider />
          <Typography component="div">
            <Box className={classes.profiles} fontSize="1.6rem">
              <img className={classes.image} src={image} alt="Profile" />
              Arsalan Khattak
            </Box>
          </Typography>
          <Divider />
          <Typography component="div">
            <Box className={classes.profiles} fontSize="1.6rem">
              <img className={classes.image} src={image} alt="Profile" />
              Arsalan Khattak
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default index;
