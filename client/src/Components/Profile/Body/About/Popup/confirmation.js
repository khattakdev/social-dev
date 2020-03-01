import React from "react";
import classes from "./index.module.scss";
import Popup from "../../../../Layout/Popup";
import Button from "../../../../Layout/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
function index() {
  return (
    <Popup closeIcon className={classes.confirmation}>
      {/* <h1>About Me</h1> */}
      <Typography gutterBottom variant="h3" align="center">
        Confirmation
      </Typography>
      <Divider />
      <Typography component="h2" variant="h2">
        Are you Sure?
      </Typography>
      <Button className={classes.delete}>Delete</Button>
    </Popup>
    // <Popup className={classes.confirmation}>
    //   {/* <h1>About Me</h1> */}
    //   <Typograhy gutterBottom variant="h3" align="center">
    //     Are you sure?
    //   </Typograhy>
    //   <Typography component="div" className={classes.buttons}>
    //     <Button className={classes.delete}>Delete</Button>
    //     <Button className={classes.cancel}>Cancel</Button>
    //   </Typography>
    // </Popup>
  );
}

export default index;
