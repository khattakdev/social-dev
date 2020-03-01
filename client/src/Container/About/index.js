import React, { Component, Fragment, useState, useEffect } from "react";
import { Card, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import classes from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
// import image from "../../../../assets/images/dp.jpg";
import TextField from "../../Components/Layout/TextArea";
import Button from "../../Components/Layout/Button";
// import Popup from "../../../Layout/Popup";
import Info from "../../Components/Profile/Body/About/info";
import InfoPopup from "../../Components/Profile/Body/About/Popup/basic";
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
        {/* <AboutPopup /> */}
        {this.state.info.isEditMode && (
          <InfoPopup
            onClose={() => this.onEditHandler("info")}
            onSave={() => this.onEditHandler("info")}
          />
        )}
        <Grid container className={classes.timeline} spacing={3}>
          <Grid item xs={12} md={3}>
            <Info editClick={() => this.onEditHandler("info")} />
          </Grid>
          <Grid item xs={12} md={9}>
            {/* About ME */}
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.aboutHead}
                  component="div"
                  align="right"
                >
                  <span></span>
                  <h2>About Me</h2>
                  <span className={classes.editSpan}>
                    {this.state.about.isEditMode ? null : (
                      <EditIcon
                        onClick={() => this.onEditHandler("about")}
                        className={classes.icon}
                      />
                    )}
                  </span>
                </Typography>
                <Divider />
                <Typography component="div" align="right"></Typography>
                <Typography component="div" className={classes.about}>
                  {this.state.about.isEditMode ? (
                    <Fragment>
                      <TextField
                        className={classes.aboutTextField}
                        value={this.state.about.value}
                      />
                      <Typography component="div" className={classes.buttons}>
                        <Button onClick={() => this.onEditHandler("about")}>
                          Save
                        </Button>
                        <Button
                          onClick={() => this.onEditHandler("about")}
                          className={classes.buttons__discard}
                        >
                          Discard
                        </Button>
                      </Typography>
                    </Fragment>
                  ) : (
                    <p>{this.state.about.value}</p>
                  )}
                </Typography>
              </CardContent>
            </Card>

            {/* Employement */}

            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.employmentHead}
                  component="div"
                  align="center"
                >
                  <span></span>
                  <h2>Employment</h2>
                  <AddIcon className={classes.icon} />
                </Typography>
                <Divider />

                <Typography component="div" className={classes.employment}>
                  <Typography component="div" className={classes.employmentTop}>
                    <h4>MetaLab Agency</h4>
                    <Typography className={classes.icons} component="div">
                      <DeleteIcon className={classes.icon} />
                      <EditIcon className={classes.icon} />
                    </Typography>
                    <p>UI/UX Designer</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.employmentDate}
                  >
                    <p>2nd January - Present</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.employmentDetail}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </Typography>
                </Typography>

                <Typography component="div" className={classes.employment}>
                  <Typography component="div" className={classes.employmentTop}>
                    <h4>MetaLab Agency</h4>
                    <Typography className={classes.icons} component="div">
                      <DeleteIcon className={classes.icon} />
                      <EditIcon className={classes.icon} />
                    </Typography>
                    <p>UI/UX Designer</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.employmentDate}
                  >
                    <p>2nd January - Present</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.employmentDetail}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.educationHead}
                  component="div"
                  align="center"
                >
                  <span></span>
                  <h2>Education</h2>
                  <AddIcon className={classes.icon} />
                </Typography>
                <Divider />

                <Typography component="div" className={classes.education}>
                  <Typography component="div" className={classes.educationTop}>
                    <h4>Stanford University</h4>
                    <Typography className={classes.icons} component="div">
                      <DeleteIcon className={classes.icon} />
                      <EditIcon className={classes.icon} />
                    </Typography>
                    <p>(BS) CS</p>
                  </Typography>
                  <Typography component="div" className={classes.educationDate}>
                    <p>2nd January - Present</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.educationDetail}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </Typography>
                </Typography>

                <Typography component="div" className={classes.education}>
                  <Typography component="div" className={classes.educationTop}>
                    <h4>Whitney High School</h4>
                    <Typography className={classes.icons} component="div">
                      <DeleteIcon className={classes.icon} />
                      <EditIcon className={classes.icon} />
                    </Typography>
                    <p>Computer Science</p>
                  </Typography>
                  <Typography component="div" className={classes.educationDate}>
                    <p>2nd January - Present</p>
                  </Typography>
                  <Typography
                    component="div"
                    className={classes.educationDetail}
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
