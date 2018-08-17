import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from "@material-ui/core/Typography";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClassIcon from '@material-ui/icons/Class';
import CodeIcon from '@material-ui/icons/Code'; 
import DraftsIcon from '@material-ui/icons/Drafts';
import styles from "../styles/ContactStyle";


function ContactList(props) {
  const { classes } = props;
  return (
    <div className={classes.Container}>
      <List component="nav" className={classes.List}>
        <ListItem button component="a" href="#simple-list" className={classes.ContactItem}>
          <ListItemIcon className={classes.ItemText}>
            <ClassIcon/>
          </ListItemIcon>
          <Typography className={classes.Font}>LinkedIn Profile</Typography>
        </ListItem>
        <ListItem button component="a" href="#simple-list" className={classes.ContactItem}>
          <ListItemIcon className={classes.ItemText}>
            <CodeIcon/>
          </ListItemIcon>
          <Typography className={classes.Font}>Github Profile</Typography>
        </ListItem>
        <ListItem button className={classes.ContactItem}>
          <ListItemIcon className={classes.ItemText}>
            <DraftsIcon/>
          </ListItemIcon>
          <Typography className={classes.Font}>Email</Typography>
        </ListItem>
      </List>
    </div>
  );
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactList);