import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./index.module.scss";
class index extends Component {
  render() {
    return (
      <>
        {this.props.loading ? (
          <>
            <div className={classes.spinner}>
              <div className={classes.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.layout.loading
});

export default connect(mapStateToProps)(index);
