import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import {NavData, NavSecondaryData} from './SidebarData';
import { HiOutlineChevronDown, HiMail } from 'react-icons/hi';
import {useSidebar} from '../../Context/SidebarContext';
import {useForm} from '../../Context/FormFixedContext';
import './Style.css';
export default function Sidebar(props) {
    const {sidebar} = useSidebar()
    const {ShowForm} = useForm()
    const [show, setShow] = useState(false)
    const ShowNav = () => setShow(!show)
    return (
        <div className = {sidebar ? "sidebar active" : "sidebar"}>
            <div className = "sidebar-top">
                <Button className = {sidebar ? "button-top active" : "button-top"} onClick = {ShowForm}>
                    {sidebar ? 
                        <span><HiMail size = "20"/>Redactar</span>
                    :
                        <HiMail size = "25"/>
                    }
                </Button>
            </div>
            <Nav className = "flex-column">
                {
                    NavData.map((item,index) => (
                        <Nav.Link href = {item.link} key = {index} className = "nav-sidebar">
                            {item.icons} <span className = "name-link" style = {sidebar ? {display: "inline"} : {display: "none"}}>{item.nombre}</span>
                        </Nav.Link>
                    ))
                }
                <Nav.Link href = "#" onClick = {ShowNav} className = "nav-sidebar">
                   <HiOutlineChevronDown size = "25" className = {show ? "icon-plus active" : "icon-plus"}/>
                   <span className = "name-link" style = {sidebar ? {display: ""} : {display: "none"}}>Más</span>
                </Nav.Link>
            </Nav>
            <Nav className = "flex-column" style = {show ? {display: "inline"} : {display: "none"}}>
            {
                    NavSecondaryData.map((item,index) => (
                        <Nav.Link href = {item.link} key = {index} className = "nav-sidebar">
                            {item.icons} <span className = "name-link" style = {show ? {display: ""} : {display: "none"}}>{item.nombre}</span>
                        </Nav.Link>
                    ))
                }
            </Nav>
        </div>
    )
}
