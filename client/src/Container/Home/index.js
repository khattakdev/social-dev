import React, { Component } from "react";
import classes from "./index.module.scss";
import Home from "../../Components/Home";
import Auth from "../../Components/Layout/Auth/index";
import Login from "../../Components/Layout/Auth/Login";
import Signup from "../../Components/Layout/Auth/Signup";
class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authState: true
    };

    this.tweakAuthState = this.tweakAuthState.bind(this);
  }

  tweakAuthState = () => {
    this.setState(prevState => ({
      authState: !prevState.authState
    }));
  };
  render() {
    return (
      <Home>
        <Auth authState={this.state.authState} tweakAuth={this.tweakAuthState}>
          {this.state.authState ? (
            <Login />
          ) : (
            <Signup className={classes.fadein} />
          )}
        </Auth>
      </Home>
    );
  }
}

export default index;
