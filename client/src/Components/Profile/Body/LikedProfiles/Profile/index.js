import React, { useState } from "react";
import classes from "./index.module.scss";
import { Card, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { ReactComponent as HeartIcon } from "../../../../../assets/icons/heart.svg";
import { ReactComponent as HeartBorderIcon } from "../../../../../assets/icons/heart-border.svg";
import profile from "../../../../../assets/images/dp.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentHeart, setCurrentHeart] = useState(true);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="div" align="right">
          {currentHeart ? (
            <HeartIcon
              onClick={() => setCurrentHeart(!currentHeart)}
              className={classes.cardIcon}
            />
          ) : (
            <HeartBorderIcon
              onClick={() => setCurrentHeart(!currentHeart)}
              className={classes.cardIcon}
            />
          )}
        </Typography>
        <Typography component="div" className={classes.cardContent}>
          <img className={classes.cardImg} src={profile} />
          <Typography className={classes.name} variant="h4" gutterBottom>
            Arsalan Khattak
          </Typography>
          <p className={classes.info}>Posts: 5</p>
        </Typography>
        <Divider />
        <p className={classes.cardBottom}>
          <Link to="/profile">View Profile</Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default Index;
