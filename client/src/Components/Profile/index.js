import React, { Fragment } from "react";
import classes from "./index.module.scss";
import Navbar from "../Layout/Navbar";
import Top from "./Top";
import Body from "./Body";

const index = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.profile}>
        <Top />
        <Body />
      </div>
    </Fragment>
  );
};

export default index;
