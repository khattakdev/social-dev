import React from "react";
import classes from "./index.module.scss";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Log from "./log";

const index = () => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Log date="12/12/19">You Commented on Ali's Post</Log>
        <Log date="10/11/19">You Liked Ahmed's Post</Log>
        <Log date="05/09/19">You Disliked Zara's Profile</Log>
        <Log date="04/07/19">You Commented on Haris' Post</Log>
        <Log date="02/05/19">You Liked Haris' Profile</Log>
      </CardContent>
    </Card>
  );
};

export default index;
