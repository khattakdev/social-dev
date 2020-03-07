import React, { Component } from "react";
import classes from "./index.module.scss";
import { connect } from "react-redux";
import Home from "../../Components/Home";
import Auth from "../../Components/Layout/Auth/index";
import Login from "../../Components/Layout/Auth/Login";
import Signup from "../../Components/Layout/Auth/Signup";

import { loginUser } from "../../redux/actions/user";
import { snackbarShow } from "../../redux/actions/layout";
class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authState: true,
      isAuthenticated: false,
      userInfo: {
        email: {
          required: true,
          value: ""
        },
        password: {
          value: ""
        }
      }
    };

    this.tweakAuthState = this.tweakAuthState.bind(this);
  }

  tweakAuthState = () => {
    this.setState(prevState => ({
      authState: !prevState.authState
    }));
  };

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: {
          ...this.state.userInfo[e.target.name],
          value: e.target.value
        }
      }
    });
  };
  render() {
    // Just to avoid writing this.state everytime
    const userInfo = this.state.userInfo;
    return (
      <Home>
        <Auth authState={this.state.authState} tweakAuth={this.tweakAuthState}>
          {this.state.authState ? (
            <Login
              onLogin={() =>
                this.props.loginUser(
                  userInfo.email.value,
                  userInfo.password.value
                )
              }
              values={this.state.userInfo}
              onChangeHandler={this.onChangeHandler}
            />
          ) : (
            <Signup className={classes.fadein} />
          )}
        </Auth>
      </Home>
    );
  }
}

const mapStateToProps = state => ({
  email: state.user.email
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    snackbarShow: (snackbarType, message) =>
      dispatch(snackbarShow(snackbarType, message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
