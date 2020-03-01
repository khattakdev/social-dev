import React, { Component } from "react";
import classes from "./index.module.scss";
import Popup from "../../../../Layout/Popup";
import TextInput from "../../../../Layout/TextInput";
import TextArea from "../../../../Layout/TextArea";
import Button from "../../../../Layout/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinDate: {
        value: ""
      },
      leavingDate: {
        current: true,
        value: ""
      },
      degree: {
        value: "(BS) CS"
      },
      description: {
        value: ""
      },
      institute: {
        value: "MetaLab Agency"
      }
    };

    this.checkBoxHandler = this.checkBoxHandler.bind(this);
  }

  changeValueHandler = (name, value) => {
    this.setState({
      [name]: {
        ...this.state[name],
        value
      }
    });
  };

  checkBoxHandler = () => {
    this.setState(prevstate => ({
      leavingDate: {
        ...this.state.leavingDate,
        current: !prevstate.leavingDate.current
      }
    }));
  };
  render() {
    return (
      <Popup
        closeIcon
        onClick={this.props.onClose}
        className={classes.employment}
      >
        {/* <h1>About Me</h1> */}
        <Typography gutterBottom variant="h2" component="h2" align="center">
          Education
        </Typography>
        <Divider />
        <Typography component="div" className={classes.experience}>
          <Typography component="div" className={classes.experience_data}>
            <Typography component="div" className={classes.info}>
              <h4>Institute</h4>
              <TextInput
                className={classes.input}
                type="text"
                placeholder="Islamabad"
                onChange={e =>
                  this.changeValueHandler("institute", e.target.value)
                }
                value={this.state.institute.value}
              />
            </Typography>
            <Typography component="div" className={classes.info}>
              <h4>Degree</h4>
              <TextInput
                className={classes.input}
                type="text"
                placeholder="Designer"
                value={this.state.degree.value}
                onChange={e =>
                  this.changeValueHandler("degree", e.target.value)
                }
              />
            </Typography>
            <Typography component="div" className={classes.info}>
              <h4>Joining Date:</h4>
              <TextField
                id="outlined-date-input"
                label=""
                onChange={e =>
                  this.changeValueHandler("joinDate", e.target.value)
                }
                value={this.state.joinDate.value}
                className={classes.input}
                type="date"
                autoComplete="current-date"
                margin="normal"
                variant="outlined"
              />
            </Typography>
            <Typography component="div" className={classes.info}>
              <label for="current">
                <input
                  type="checkbox"
                  id="current"
                  checked={this.state.leavingDate.current}
                  onClick={this.checkBoxHandler}
                />
                <p className={classes.label}>Currently Working</p>
              </label>
              <TextField
                id="outlined-date-input"
                label=""
                className={classes.input}
                type="date"
                onChange={e =>
                  this.changeValueHandler("leavingDate", e.target.value)
                }
                value={this.state.leavingDate.value}
                autoComplete="current-date"
                margin="normal"
                disabled={this.state.leavingDate.current}
                variant="outlined"
              />
            </Typography>
            <Typography
              component="div"
              className={[classes.info, classes.info_area]}
            >
              <h4>Description</h4>
              <TextArea
                className={classes.input_area}
                type="text"
                placeholder="institute Name"
                value={this.state.description.value}
                onChange={e =>
                  this.changeValueHandler("description", e.target.value)
                }
              />
            </Typography>
          </Typography>
          <Typography className={classes.btns} component="div">
            <Button className={classes.btn_save} onClick={this.props.onSave}>
              Save
            </Button>
          </Typography>
        </Typography>
      </Popup>
    );
  }
}
