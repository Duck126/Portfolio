import React, { Component } from 'react';
import profile from "../../assets/images/profile.jpg";
import "../styles/About.css";
import ExpansionTest from "../ExpansionTest";
import AboutList from "../AboutList/AboutList";

class About extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="aboutcontainer">
                    <img src={profile} alt="" className="responsive-img z-depth-4 profileimg"></img>
                    <ExpansionTest/>
                </div>
                <div className="aboutbodycontainer">
                    <h3 className="fontsty">About Me</h3>
                </div>
            </div> 
        )
    }
}


export default About;