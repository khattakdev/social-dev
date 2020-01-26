import React from "react";
import Auth from "../Layout/Auth/index";
import Logo from "../../assets/images/logo-white.png";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.Hero}>
      <img src={Logo} className={classes.Logo} alt="Logo" />

      <div className={classes.Center}>
        <div className={classes.Text}>
          <h1>World's Biggest Social Media Platform For Developer</h1>
          <p>
            We help you connect with other developers that lives in other part
            of the word. Join the community to connect with your fellow
            developers right now
          </p>
        </div>

        <div className={classes.Auth}>
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default Home;
