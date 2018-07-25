import React, { Component } from 'react';
import profile from "../../assets/images/profile.jpg";
import "../styles/About.css";
import AboutList from "../AboutList/AboutList";

const About = () => {
    return(
        <div className="container">
            <div className="aboutcontainer">
                <img src={profile} alt="" className="circle responsive-img z-depth-4 profileimg"></img>
                <AboutList/>
            </div>
            <div className="aboutbodycontainer">
                <h3 className="fontsty">About Me</h3>
            </div>
        </div> 
    )
}


export default About;