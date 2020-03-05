import React from "react";
import { Card, Divider } from "@material-ui/core";
import classes from "../../index.module.scss";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/delete.svg";
import { ReactComponent as AddIcon } from "../../../../assets/icons/add.svg";

const employment = props => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.employmentHead}
          component="div"
          align="center"
        >
          <span></span>
          <h2>Employment</h2>
          <AddIcon className={classes.icon} onClick={props.addClick} />
        </Typography>
        <Divider />

        <Typography component="div" className={classes.employment}>
          <Typography component="div" className={classes.employmentTop}>
            <h4>MetaLab Agency</h4>
            <Typography className={classes.icons} component="div">
              <DeleteIcon className={classes.icon} />
              <EditIcon className={classes.icon} onClick={props.editClick} />
            </Typography>
            <p>UI/UX Designer</p>
          </Typography>
          <Typography component="div" className={classes.employmentDate}>
            <p>2nd January - Present</p>
          </Typography>
          <Typography component="div" className={classes.employmentDetail}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
          <Typography component="div" className={classes.employmentDate}>
            <p>2nd January - Present</p>
          </Typography>
          <Typography component="div" className={classes.employmentDetail}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default employment;
