import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContactList from './ContactList/ContactList';
import styles from "./styles/AboutStyle";

// const styles = theme => ({
//   panel: {
//     width: '100%',
//     position: 'relative',
//     top: '40%'
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// });

function ExpansionTest (props) {
  const { classes } = props;
  return (
    <div className={classes.panel}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Projects</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Languages</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul className={classes.LangList}>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
          <ul className={classes.LangList}>
            <li>Javascript</li>
            <li>Mongoose</li>
            <li>Material-UI</li>
            <li>Axios</li>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.AboutItem}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Contact Info</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.AboutItem1}>
          <ContactList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

ExpansionTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionTest);