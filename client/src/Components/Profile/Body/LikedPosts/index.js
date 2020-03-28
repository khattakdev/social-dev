import React, { useEffect } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import classes from "./index.module.scss";

import { loadUserData } from "../../../../redux/actions/user";
import { loadingStart } from "../../../../redux/actions/layout";

const Index = props => {
  useEffect(() => {
    if (localStorage.getItem("token") && !props.isAuth) {
      props.loadingStart();
      props.loadUserData();
    }
  }, []);

  const noPostMessage =
    props.posts && props.posts.length == 0 ? (
      <h4 className={classes.center_text}>No Post Found</h4>
    ) : null;

  return (
    <>
      <Grid container spacing={3}>
        {noPostMessage}
        {props.posts.map(value => (
          <Grid key={value} item xs={12}>
            <Post />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuth,
  posts: state.user.likedPosts
});
const mapDispatchToProps = dispatch => {
  return {
    loadUserData: (id, cb) => dispatch(loadUserData(id, cb)),
    loadingStart: () => dispatch(loadingStart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
