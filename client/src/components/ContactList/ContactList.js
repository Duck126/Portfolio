import React, { Component } from 'react';
import "../styles/ContactList.css";
import {Collection, CollectionItem} from "react-materialize";


class ContactList extends Component{
    render(){
        return (
            <div >
                <Collection className="Contact">
                    <CollectionItem className="Contact" href='#'><i class="fas fa-envelope-square contacticon"></i>Email</CollectionItem>
                    <CollectionItem className="Contact" href='#'><i class="fab fa-linkedin contacticon"></i>LinkedIn Profile</CollectionItem>
                    <CollectionItem className="Contact" href='#'><i class="fab fa-github contacticon"></i>Github Profile</CollectionItem>
                </Collection>
            </div>
        )
    }
}

export default ContactList;