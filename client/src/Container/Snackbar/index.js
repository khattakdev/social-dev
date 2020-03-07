import React, { Component } from "react";
import classes from "./index.module.scss";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class index extends Component {
  render() {
    return (
      <Snackbar className={classes.Snackbar} open={this.props.snackbar}>
        <Alert
          className={[classes.alert, classes.alert2].join(" ")}
          severity={this.props.snackbarType}
        >
          {this.props.message}
        </Alert>
      </Snackbar>
    );
  }
}

const mapStateToProps = state => ({
  snackbar: state.layout.snackbar,
  snackbarType: state.layout.snackbarType,
  message: state.layout.message
});
export default connect(mapStateToProps)(index);
