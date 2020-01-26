import React from "react";
import classes from "./index.module.scss";
import Popup from "../../../../Layout/Popup";
import TextArea from "../../../../Layout/TextArea";
import Button from "../../../../Layout/Button";
import Typograhy from "@material-ui/core/Typography";
function index() {
  return (
    <Popup closeIcon>
      {/* <h1>About Me</h1> */}
      <Typograhy gutterBottom variant="h3" align="center">
        About Me
      </Typograhy>
      <TextArea
        className={classes.about}
        value={`  Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset`}
      />
      <Button>Save</Button>
    </Popup>
  );
}

export default index;
