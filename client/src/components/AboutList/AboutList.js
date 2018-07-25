import React, { Component } from 'react';
import "../styles/AboutList.css";
import {Collapsible, CollapsibleItem} from "react-materialize";
import ContactList from '../ContactList/ContactList';


class AboutList extends Component{
    render(){
        return (
            <div >
                <Collapsible className="AboutList" accordion defaultActiveKey={1}>
                    <CollapsibleItem header='Contact Info' icon='forum'>
                        <ContactList/>
                    </CollapsibleItem>
                    <CollapsibleItem header='Proficient Languages' icon='school'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Projects' icon='work'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                </Collapsible>
            </div>
        )
    }
}



export default AboutList;