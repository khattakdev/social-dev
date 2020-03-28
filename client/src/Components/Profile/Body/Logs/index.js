import React, { useEffect } from "react";
import classes from "./index.module.scss";
import { Card } from "@material-ui/core";
import { connect } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import Log from "./log";

import { loadUserData } from "../../../../redux/actions/user";
import { loadingStart } from "../../../../redux/actions/layout";

const Index = props => {
  useEffect(() => {
    if (localStorage.getItem("token") && !props.isAuth) {
      props.loadingStart();
      props.loadUserData();
    }
  }, []);
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {props.logs.map(log => (
          <Log key={log._id} date={log.date}>
            {log.message}
          </Log>
        ))}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuth,
  logs: state.user.logs
});
const mapDispatchToProps = dispatch => {
  return {
    loadUserData: (id, cb) => dispatch(loadUserData(id, cb)),
    loadingStart: () => dispatch(loadingStart())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
