import React from "react";
import Profile from "./Profile";
import classes from "./index.module.scss";
import Grid from "@material-ui/core/Grid";
const index = () => {
  const val = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Grid container spacing={3}>
      {val.map(value => (
        <Grid key={value} item xs={12} sm={6} md={4} lg={3}>
          <Profile />
        </Grid>
      ))}
    </Grid>
  );
};

export default index;
