import React, { Component } from 'react';
import "../styles/AboutList.css";
import withStyles from "@material-ui/core/styles";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Typography from "@material-ui/core/Typography";
import style from "../styles/AboutStyle";
import PropTypes from "prop-types";



 class AboutList extends React.Component {
     
    state = {
    expanded: null,
    };

    handleChange = (panel) => (event, expanded) => {
        event.preventDefault(event);
        this.setState({
            expanded: expanded ? panel : false
        });
        console.log(this.state.expanded);
    };

    render() {
        const {expanded} = this.state;
        console.log(this.state.expanded);
        return (
            
            <div>
                <ExpansionPanel style={style.Panel} onChange={this.handleChange('panel1')} expanded={expanded === 'panel1'}>
                    <ExpansionPanelDetails>
                        <Typography color="primary" variant="title">
                            This Is The Expansion Panel
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

AboutList.propTypes = {
    classes: PropTypes.func.isRequired,
};

console.log(AboutList.propTypes);

export default AboutList;