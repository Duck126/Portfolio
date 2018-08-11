import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
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
          <ListItemIcon>
            <ClassIcon/>
          </ListItemIcon>
          <ListItemText primary="Linkedin"/>
        </ListItem>
        <ListItem button component="a" href="#simple-list" className={classes.ContactItem}>
          <ListItemIcon>
            <CodeIcon/>
          </ListItemIcon>
          <ListItemText primary="Github"/>
        </ListItem>
        <ListItem button className={classes.ContactItem}>
          <ListItemIcon>
            <DraftsIcon/>
          </ListItemIcon>
          <ListItemText primary="Email"/>
        </ListItem>
      </List>
    </div>
  );
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactList);