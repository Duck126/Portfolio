import React, { Component } from 'react';
import profile from "../../assets/images/profile.jpg";
import "../styles/About.css";
import styles from "../styles/AboutPage";
import PropTypes from 'prop-types';
import ExpansionTest from "../ExpansionTest";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';


function About(props){
    const { classes } = props;
    return(  
        <div className={classes.Container}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={3}>
                    <div className={classes.Aboutcontainer}>
                            <div className={classes.ImgDiv}>
                                <img src={profile} alt="" className="responsive-img z-depth-4"></img>
                            </div>
                        <ExpansionTest/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div className={classes.Aboutbodycontainer}>
                        <Typography className={classes.Fontsty}>About Me</Typography>
                        <Typography className={classes.Body} paragraph={true}>I enlisted into the US Army as an Infantryman at the age of 19, I spent 6 months in my initial role as a rifleman, having a knack for troubleshooting and repairing the communication and GPS systems we used, I took on the role of Radio Operator, tasked with repair, maintenance, and operation of roughly 70 systems. In this position I also attended an extensive Dari/Farsi Language course as well as an EMT-B
                            course. After 1 year as a Radio Operator I received the opportunity for a Senior Operator position, where I oversaw and instructed a group 5 Radio operators as well as scheduling training, maintenance, operation checks for the group totaling more than 300 systems. While in this role I took on an additional role as an Unmanned Aerial System pilot ("By far the most enjoyable of all"), this position involved operation, troubleshooting, programming and route planning of the machine.
                            Finishing out my term of service with the Army in early January 2016, with a skill-set centered around computer driven systems and medical studies I set out to find my place outside of the military. Initially my sights were set on the medical industry, with plans to become an anesthesiologist. Shortly after starting my 2nd semester of nursing school, I realized that medical knowledge may be an interest of mine but it wasn't necessarily something I would enjoy as a career. Since then I've found my place as a developer, building various applications with multiple programming languages and frameworks such as JavaScript, Node.js, React.js, MongoDB, JQuery, and MySQL through the UT Austin Coding Boot Camp. I'm currently looking for my first position as a Full Stack Developer, If you believe your team would benefit from a team-oriented and driven individual with a desire to learn and improve, please don't hesitate to drop me a message!
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div> 
    );
};

Typography.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);