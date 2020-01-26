import React from "react";
import Logo from "../../../assets/images/logo-only.png";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";

const index = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img className={classes.image} src={Logo} alt="Logo" />
        <h4>Devonnector</h4>
      </div>
      <Link className={classes.navLink} to="/">
        <LogoutIcon className={classes.icon} /> Logout
      </Link>
    </nav>
  );
};

export default index;
