import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import {NavData, NavSecondaryData} from './SidebarData';
import { HiPlus, HiOutlineChevronDown } from 'react-icons/hi';

export default function Sidebar(props) {
    const [show, setShow] = useState(false)
    const ShowNav = () => setShow(!show)
    return (
        <div className = {props.Show ? "sidebar active" : "sidebar"}>
            <div className = "sidebar-top">
                <Button className = {props.Show ? "button-top active" : "button-top"} onClick = {() => props.onShowForm()}>
                    {props.Show ? 
                        "Redactar"
                    :
                        <HiPlus size = "25"/>
                    }
                </Button>
            </div>
            <Nav className = "flex-column">
                {
                    NavData.map((item,index) => (
                        <Nav.Link href = {item.link} key = {index}>
                            {item.icons} <span className = "name-link" style = {props.Show ? {display: ""} : {display: "none"}}>{item.nombre}</span>
                        </Nav.Link>
                    ))
                }
                <Nav.Link href = "#" onClick = {ShowNav}>
                   <HiOutlineChevronDown size = "25" className = {show ? "icon-plus active" : "icon-plus"}/>
                   <span className = "name-link" style = {props.Show ? {display: ""} : {display: "none"}}>Más</span>
                </Nav.Link>
            </Nav>
            <Nav className = "flex-column" style = {show ? {display: "block"} : {display: "none"}}>
            {
                    NavSecondaryData.map((item,index) => (
                        <Nav.Link href = {item.link} key = {index}>
                            {item.icons} <span className = "name-link" style = {props.Show ? {display: ""} : {display: "none"}}>{item.nombre}</span>
                        </Nav.Link>
                    ))
                }
            </Nav>
        </div>
    )
}
