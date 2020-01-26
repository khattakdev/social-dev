import React from "react";
import profile from "../../../assets/images/dp.jpg";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";
import classes from "./index.module.scss";
const index = () => {
  return (
    <div className={classes.top}>
      <div className={classes.cover}></div>
      <div className={classes.menu}>
        <ul>
          <li>
            <p>Timeline</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Liked Posts</p>
          </li>
        </ul>
        <div className={classes.profile}>
          <div className={classes.display}>
            <Camera className={classes.camera} />
            <img className={classes.img} src={profile} alt="Profile" />
          </div>
          <h2>Arsalan Khattak</h2>
        </div>
        <ul>
          <li>
            <p>Liked Profiles</p>
          </li>
          <li>
            <p>Activity Logs</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
