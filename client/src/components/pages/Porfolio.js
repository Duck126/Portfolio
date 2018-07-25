import React, { Component } from 'react';
import "../styles/About.css";
import Staffd from "../../assets/images/portImgEvent.png";
import AboutList from "../AboutList/AboutList";

const Portfolio = () => {
    
    return(
         <div className="fadeImage shadow" /*div data-aos="flip-up" data-aos-delay="1000" data-aos-offset="100" */id="AA">
            <img src={Staffd} className="rounded responsive-img" alt="Staff'D"></img>
            <h5 className="displayWork">Staff'D
                <a className="dropdown-trigger btn drop1 zoom" href="#" data-target="dropdown1">
                    <i className="small material-icons right">arrow_drop_down</i>Info</a>
                <ul id="dropdown1" className="dropdown-content fa-ul">
                    <li>
                        <a href="#!" className="modal-trigger" data-target="modal1">Description </a>
                    </li>
                    <li className="divider"></li>
                    <li className="neat">
                        <a href="#!" className="content">Github
                            <i className="fab fa-github-square fa-lg"></i>
                        </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <a href="#!">three</a>
                    </li>
                </ul>
            </h5>

        </div>
    )
}


export default Portfolio;