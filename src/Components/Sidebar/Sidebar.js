import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import SidebarData from './SidebarData';
import { HiPlus } from 'react-icons/hi';

export default function Sidebar(props) {
    return (
        <div className = {props.Show ? "sidebar active" : "sidebar"}>
            <div className = "sidebar-top">
                <Button className = {props.Show ? "button-top active" : "button-top"}>
                    {props.Show ? 
                        "Redactar"
                    :
                        <HiPlus size = "25"/>
                    }
                </Button>
            </div>
            <Nav className = "flex-column">
                {
                    SidebarData.map((item,index) => (
                        <Nav.Link href = {item.link} key = {index}>
                            {item.icons} <span className = "name-link" style = {props.Show ? {display: ""} : {display: "none"}}>{item.nombre}</span>
                        </Nav.Link>
                    ))
                }
            </Nav>
        </div>
    )
}
