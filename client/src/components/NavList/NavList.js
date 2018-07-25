import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Portfolio from "../pages/Porfolio";
//import "../styles/Header.css";

class NavList extends Component{
    render(){
        return (
            <Router>
                <div>
            
                    <li className="nav-item">
                        <Link to="/" className="fontSty nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="fontSty nav-link">Portfolio</Link>
                    </li>
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                </div>
            </Router>
        )   
    }
}



export default NavList;