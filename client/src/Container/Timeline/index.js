import React, { Fragment, Component } from "react";
import { Card, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import classes from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import image from "../../assets/images/dp.jpg";
import TextField from "../../Components/Layout/TextArea";
import Button from "../../Components/Layout/Button";
import Info from "../../Components/Profile/Body/Timeline/info";
import Profiles from "../../Components/Profile/Body/Timeline/profiles";
import Post from "../../Components/Profile/Body/Timeline/Post";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: ""
    };
    this.newPostHandler = this.newPostHandler.bind(this);
  }

  newPostHandler = e => {
    this.setState({
      newPost: e.target.value
    });
  };

  setNewPostEmptyHandler = () => {
    this.setState({
      newPost: ""
    });
  };
  render() {
    return (
      <Fragment>
        <Grid container className={classes.timeline} spacing={3}>
          <Grid item xs={12} md={3}>
            <Info />
          </Grid>
          <Grid item xs={12} md={5}>
            <Card className={classes.newpost}>
              <CardContent>
                <Typography
                  component="div"
                  className={classes.top}
                  align="center"
                >
                  <img className={classes.image} src={image} alt="Profile" />
                  <TextField
                    className={classes.textField}
                    placeholder="Express Yourself"
                    value={this.state.newPost}
                    onChange={this.newPostHandler}
                  />
                </Typography>
                <Divider />
                <Typography component="div" className={classes.buttons}>
                  <Button disabled={!this.state.newPost}>Post</Button>
                  <Button
                    disabled={!this.state.newPost}
                    className={classes.buttons__discard}
                    onClick={this.setNewPostEmptyHandler}
                  >
                    Discard
                  </Button>
                </Typography>
              </CardContent>
            </Card>
            <Post image={image} />
            <Post image={image} />
            <Post image={image} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Profiles />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
