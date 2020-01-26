import React, { useState } from "react";
import classes from "./index.module.scss";
import { Card, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Popup from "../Popup";
import { ReactComponent as HeartIcon } from "../../../../../assets/icons/heart.svg";
import { ReactComponent as HeartBorderIcon } from "../../../../../assets/icons/heart-border.svg";
import profile from "../../../../../assets/images/dp.jpg";

const Index = props => {
  const [currentHeart, setCurrentHeart] = useState(true);
  const [showPopUp, setShowPop] = useState(false);

  const readMore = () => {
    setShowPop(!showPopUp);
  };

  const togglePopupHandler = () => {
    setShowPop(!showPopUp);
  };
  return (
    <>
      {showPopUp && <Popup onClick={togglePopupHandler} />}
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
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
          <Typography component="div" className={classes.cardDetails}>
            <Typography className={classes.profileInfo} component="div">
              <img className={classes.cardImg} src={profile} />
              <Typography className={classes.name} variant="h4" gutterBottom>
                Arsalan Khattak
              </Typography>
            </Typography>
            <Typography
              className={classes.cardDescription}
              variant="div"
              component="div"
            >
              <Typography component="p" variant="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,{" "}
                <span onClick={readMore}>Read More</span>
              </Typography>
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Index;
