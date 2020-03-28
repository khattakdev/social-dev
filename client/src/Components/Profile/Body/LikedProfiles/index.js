import React, { useEffect } from "react";
import Profile from "./Profile";
import classes from "./index.module.scss";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { loadUserData } from "../../../../redux/actions/user";
import { loadingStart } from "../../../../redux/actions/layout";

const Index = props => {
  useEffect(() => {
    if (localStorage.getItem("token") && !props.isAuth) {
      props.loadingStart();
      props.loadUserData();
    }
  }, []);

  const noProfileMessage =
    props.profiles && props.profiles.length == 0 ? (
      <h4 className={classes.center_text}>No Profile Found</h4>
    ) : null;
  return (
    <Grid container spacing={3}>
      {noProfileMessage}
      {props.profiles.map(value => (
        <Grid key={value} item xs={12} sm={6} md={4} lg={3}>
          <Profile />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuth,
  profiles: state.user.likedProfiles
});
const mapDispatchToProps = dispatch => {
  return {
    loadUserData: (id, cb) => dispatch(loadUserData(id, cb)),
    loadingStart: () => dispatch(loadingStart())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
