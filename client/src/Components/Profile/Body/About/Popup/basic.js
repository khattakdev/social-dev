import React, { Component } from "react";
import classes from "./index.module.scss";
import Popup from "../../../../Layout/Popup";
import TextInput from "../../../../Layout/TextInput";
import DropDown from "../../../../Layout/Dropdown";
import Button from "../../../../Layout/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        value: "Islamabad"
      },
      status: {
        value: "Jr. Developer"
      },
      gender: {
        value: "1"
      },
      company: {
        value: "MetaLab Agency"
      },
      website: {
        value: "www.metalab.com"
      }
    };
  }

  changeValueHandler = (name, value) => {
    this.setState({
      [name]: {
        ...this.state[name],
        value
      }
    });
  };
  render() {
    return (
      <Popup closeIcon onClick={this.props.onClose}>
        {/* <h1>About Me</h1> */}
        <Typography gutterBottom variant="h3" align="center">
          Basic Info
        </Typography>
        <Divider />
        <Typography component="div" className={classes.basic}>
          <Typography component="div" className={classes.basic_data}>
            <Typography component="div" className={classes.info}>
              <h4>Lives in:</h4>
              <TextInput
                className={classes.input}
                type="text"
                placeholder="Islamabad"
                onChange={e =>
                  this.changeValueHandler("location", e.target.value)
                }
                value={this.state.location.value}
              />
              {/* <p>Islamabad</p> */}
            </Typography>
            <Typography component="div" className={classes.info}>
              <h4>Gender:</h4>
              <DropDown
                className={classes.input}
                onChange={e =>
                  this.changeValueHandler("gender", e.target.value)
                }
                defaultValue={this.state.gender.value}
                values={[
                  { val: 1, value: "Male" },
                  { val: 2, value: "Female" },
                  { val: 3, value: "Other" }
                ]}
              />
            </Typography>
            <Typography component="div" className={classes.info}>
              <h4>Status:</h4>
              <TextInput
                className={classes.input}
                type="text"
                placeholder="Designer"
                value={this.state.status.value}
                onChange={e =>
                  this.changeValueHandler("status", e.target.value)
                }
              />
            </Typography>
            <Typography component="div" className={classes.info}>
              <h4>Company</h4>
              <TextInput
                className={classes.input}
                type="text"
                placeholder="Company Name"
                value={this.state.company.value}
                onChange={e =>
                  this.changeValueHandler("company", e.target.value)
                }
              />
            </Typography>
            <Typography component="div" className={classes.info}>
              <h4>Website</h4>
              <TextInput
                className={classes.input}
                type="text"
                placeholder="www.website.com"
                value={this.state.website.value}
                onChange={e =>
                  this.changeValueHandler("website", e.target.value)
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
