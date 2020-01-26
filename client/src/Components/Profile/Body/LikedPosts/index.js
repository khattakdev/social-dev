import React from "react";
import Post from "./Post";
import Grid from "@material-ui/core/Grid";
const index = () => {
  const val = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Grid container spacing={3}>
        {val.map(value => (
          <Grid key={value} item xs={12}>
            <Post />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default index;
