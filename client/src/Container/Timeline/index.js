import React, { Fragment, Component } from "react";
import axios from "../../axios";
import { Card, Divider } from "@material-ui/core";
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
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

import {
  loadingStart,
  snackbarShow,
  loadingEnd
} from "../../redux/actions/layout";

import {
  loadPosts
} from '../../redux/actions/post'

import { loadUserData } from "../../redux/actions/user";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: "",
      posts: []
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

  componentDidMount() {
    const userId = this.props.match.params.id;
    if (!this.props.email && localStorage.getItem("token")) {
      this.props.loadingStart();
      this.props.loadUserData(userId, () => {
       alert("Redirection Needed")
      });
    }

    axios.get(`post/getall${userId ? '/' + userId : ''}`).then(res => {
      this.setState({
        posts: res.data.msg
      })
    }).catch(err => {

    })
  }

  onPostHandler = () => {
    this.props.loadingStart();
    const body = {
      email: this.props.email,
      description: this.state.newPost
    };
    axios
      .post("post/new", body)
      .then(res => {
        this.props.showSnackbar("success", res.data.msg);
        this.props.loadUserData();
        this.props.loadingEnd();
        this.setState({
          posts: res.data.posts,
          newPost: ""
        });
      })
      .catch(err => {
        this.props.loadingEnd();
        if (err.response) {
          return this.props.showSnackbar("error", err.response.data.error[0]);
        }
        this.props.showSnackbar(
          "error",
          "Internal Error, Please Try Again Later"
        );
      });
  };

  onDeletePostHandler = (id) => {
    axios.delete(`post/delete${id ? '/' + id : ""}`).then(res => {
      const tempPosts = this.state.posts.filter(post => {
        return post._id !== id;
      });
      this.props.loadUserData();
      this.setState({
        posts: tempPosts
      });
      this.props.showSnackbar('success', res.data.msg);
    }).catch(err => {
      this.props.showSnackbar('error', err.response.data.error);
    })
  };
  render() {
    return (
      <Fragment>
        <Grid container className={classes.timeline} spacing={1}>
          <Grid item xs={12} md={3}>
            <Info />
          </Grid>
          <Grid item xs={12} md={6}>
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
                  <Button
                    disabled={!this.state.newPost}
                    onClick={this.onPostHandler}
                  >
                    Post
                  </Button>
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
            {this.state.posts.map(post => {
              const data = {
                image: this.props.image,
                post
              };
              return <Post key={post._id} data={data} deletePost={(id) => this.onDeletePostHandler(post._id)} />;
            })}
          </Grid>
          <Grid item xs={12} md={3}>
            <Profiles />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts,
  image: state.user.image,
  email: state.user.email
});

const mapDispatchToProps = dispatch => {
  return {
    loadingStart: () => dispatch(loadingStart()),
    loadingEnd: () => dispatch(loadingEnd()),
    showSnackbar: (type, msg) => dispatch(snackbarShow(type, msg)),
    loadUserData: (cb) => dispatch(loadUserData(cb))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
