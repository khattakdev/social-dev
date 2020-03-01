import React from "react";
import Timeline from "../../../Container/Timeline";
import About from "../../../Container/About";
// import Edit from "../../../Container/Edits/employment";
import LikedProfiles from "./LikedProfiles";
import LikedPosts from "./LikedPosts";
import Logs from "./Logs";
import { Route, Switch } from "react-router-dom";
const index = () => {
  return (
    <div>
      <Switch>
        <Route path="/profile/about" component={About} />
        {/* <Route path="/profile/edit" component={Edit} /> */}
        <Route path="/profile/likedprofiles" component={LikedProfiles} />
        <Route path="/profile/likedposts" component={LikedPosts} />
        <Route path="/profile/logs" component={Logs} />
        <Route path="/profile/" component={Timeline} />
      </Switch>
    </div>
  );
};

export default index;
