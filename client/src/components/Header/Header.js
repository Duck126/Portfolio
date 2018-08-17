import React, { Component } from 'react';
import NavList from '../NavList/NavList';
import style from '../styles/Header';

class Header extends Component{
    render(){
        return (
            <div >
                <ul className="nav nav-tabs justify-content-end shadow-sm p-3 mb-5 rounded">
                    <h3 className="name">Jonathan Duck</h3>
                    <NavList/>
                    <div className="line shadow"></div>
                    <h5 className='labelhead' style={style.labelhead}>Full Stack Developer</h5>
                    <a href="#" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </ul>
            </div>
        )
    }
}



export default Header;