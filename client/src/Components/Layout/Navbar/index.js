import React, {useState} from "react";
import Logo from "../../../assets/images/logo-only.png";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";

import { logout } from '../../../redux/actions/user';

const Index = (props) => {

    const redirectToHome = () => {
        props.logout()
    }

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img className={classes.image} src={Logo} alt="Logo" />
        <h4>Devonnector</h4>
      </div>
      <Link onClick={redirectToHome} className={classes.navLink} to='/'>
        <LogoutIcon  className={classes.icon} /> Logout
      </Link>
    </nav>
  );
};
const mapStateToProps = state => ({
    isAuth: state.user.isAuth
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
