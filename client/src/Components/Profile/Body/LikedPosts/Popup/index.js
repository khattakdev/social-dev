import React, { useState } from "react";
import classes from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import Post from "../../Timeline/Post/index";
import Popup from "../../../../Layout/Popup";
import profile from "../../../../../assets/images/dp.jpg";

const Index = props => {
  return (
    <>
      <Popup className={classes.popup} closeIcon onClick={props.onClick}>
        {" "}
        <Post className={classes.popupContent} image={profile} />
        {/* <Typography component="div" className={classes.popup}>
          <Typography className={classes.profileInfo} component="div">
            <img className={classes.popupImg} src={profile} />
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Typography>
          </Typography>
        </Typography> */}
      </Popup>
    </>
  );
};

export default Index;
