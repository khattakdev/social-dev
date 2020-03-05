import React, { Component, Fragment } from "react";
import { Card, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import classes from "./index.module.scss";
import About from "./Components/About";
import Employment from "./Components/Employment";
import Education from "./Components/Education";
// import Popup from "../../../Layout/Popup";
import Info from "../../Components/Profile/Body/About/info";
import InfoPopup from "../../Components/Profile/Body/About/Popup/basic";
import EmployementPopup from "../../Components/Profile/Body/About/Popup/employment";
import EducationPopup from "../../Components/Profile/Body/About/Popup/education";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        value: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with release of Letraset`,
        isEditMode: false
      },
      info: {
        isEditMode: false
      },
      employment: {
        isEditMode: false
      },
      education: {
        isEditMode: false
      }
    };

    this.onEditHandler = this.onEditHandler.bind(this);
  }
  // About Handlers
  onEditHandler = name => {
    this.setState(prevState => ({
      [name]: {
        ...this.state[name],
        isEditMode: !prevState[name].isEditMode
      }
    }));
  };
  render() {
    return (
      <Fragment>
        {this.state.employment.isEditMode && (
          <EmployementPopup
            onClose={() => this.onEditHandler("employment")}
            onSave={() => this.onEditHandler("employment")}
          />
        )}
        {this.state.education.isEditMode && (
          <EducationPopup
            onClose={() => this.onEditHandler("education")}
            onSave={() => this.onEditHandler("education")}
          />
        )}
        {this.state.info.isEditMode && (
          <InfoPopup
            onClose={() => this.onEditHandler("info")}
            onSave={() => this.onEditHandler("info")}
          />
        )}

        <Grid container className={classes.timeline} spacing={3}>
          <Grid className={classes.info_card} item xs={12} md={3}>
            <Info editClick={() => this.onEditHandler("info")} />
          </Grid>
          <Grid item xs={12} md={9}>
            {/* About ME */}
            <About
              about={this.state.about}
              onClick={() => this.onEditHandler("about")}
            />
            {/* Employement */}
            <Employment
              editClick={() => this.onEditHandler("employment")}
              addClick={() => this.onEditHandler("employment")}
            />
            {/* Education */}
            <Education
              addClick={() => this.onEditHandler("education")}
              editClick={() => this.onEditHandler("education")}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
