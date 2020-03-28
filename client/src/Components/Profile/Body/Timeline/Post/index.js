import React, { useState, Fragment } from "react";
import { Card, Divider } from "@material-ui/core";
import Moment from "react-moment";
import axios from '../../../../../axios';
import classes from "./index.module.scss";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "../../../../Layout/Button";
import TextField from "../../../../Layout/TextArea";
import CardContent from "@material-ui/core/CardContent";
import Comment from "./Comment";
import { ReactComponent as DeleteIcon } from "../../../../../assets/icons/delete.svg";
import { ReactComponent as HeartIcon } from "../../../../../assets/icons/heart.svg";
import { ReactComponent as CommentIcon } from "../../../../../assets/icons/comment.svg";
// import Comments from './Comments'

const Index = props => {
  const [showComments, changeCommentStatus] = useState(false);


  const onDeleteHandler = () => {
    // const postId = props.data.post._id;
    // axios.delete(`post/delete/${postId ? postId : '' }`).then()
  }
  return (
    <Card className={[classes.post, props.className].join(" ")}>
      <CardContent>
        <div className={classes.top}>
          <img className={classes.image} src={props.data.image} alt="Profile" />
          <div className={classes.top__details}>
            <h2>Arsalan Khattak</h2>
            <Box fontSize="1.2rem">
              <Moment fromNow>{props.data.post.created_at}</Moment>
            </Box>
          </div>
          <DeleteIcon className={classes.dots} onClick={props.deletePost}/>
        </div>
        <p className={classes.body}>{props.data.post.description}</p>
        <Divider className={classes.divider} />
        <div className={classes.bottom}>
          <HeartIcon className={classes.heart} />
          <Box className={classes.hearted} fontSize="1.5rem">
            {props.data.post.likes.length} people liked
            {/* You and 10 others */}
          </Box>
          <span onClick={() => changeCommentStatus(!showComments)}>
            <CommentIcon className={classes.comment} />
          </span>
        </div>
      </CardContent>
      {showComments ? (
        <Fragment>
          <Divider />
          <CardContent className={classes.comments}>
            <div className={classes.newPost}>
              <img
                className={classes.image}
                src={props.data.image}
                alt="Profile"
              />
              <TextField
                className={classes.textField}
                placeholder="Write a Comment"
              />
            </div>
            <Typography align="right">
              <Button className={classes.button}>Post</Button>
            </Typography>
            {props.data.post.comments.map(comment => (
              <>
                <Divider />
                <Comment image={props.data.image} comment={comment} />
              </>
            ))}
            {/* <Divider />
            <Comment image={props.image} />
            <Divider />
            <Comment image={props.image} />
            <Divider />
            <Comment image={props.image} /> */}
          </CardContent>
        </Fragment>
      ) : null}
    </Card>
  );
};

export default Index;
