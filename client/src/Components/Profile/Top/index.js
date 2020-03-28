import React from "react";
import profile from "../../../assets/images/dp.jpg";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";
import classes from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const index = props => {
  return (
    <div className={classes.top}>
      <div className={classes.cover}></div>
      <div className={classes.menu}>
        <ul>
          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact
              to="/profile"
            >
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact
              to="/profile/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact
              to="/profile/likedposts"
            >
              Liked Posts
            </NavLink>
          </li>
        </ul>
        <div className={classes.profile}>
          <div className={classes.display}>
            <Camera className={classes.camera} />
            <input
              className={classes.upload_btn}
              type="file"
              onChange={() => alert("Changed!!!")}
            />
            <img className={classes.img} src={profile} alt="Profile" />
          </div>
          <h2>
            {props.firstName} {props.lastName}
          </h2>
        </div>
        <ul>
          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact
              to="/profile/likedprofiles"
            >
              Liked Profiles
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact
              to="/profile/logs"
            >
              Activity Logs
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName
});

export default connect(mapStateToProps)(index);
