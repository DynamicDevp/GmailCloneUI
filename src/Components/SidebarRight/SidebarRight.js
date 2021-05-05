import React from 'react'
import './Style.css'
import { useSidebarRight } from '../../Context/SidebarRightContext'
import { Nav } from 'react-bootstrap';
export default function SidebarRight() {
    const {sidebar} = useSidebarRight()
    return (
        <div className = {sidebar ? "sidebar-right active" : "sidebar-right"}>
            <Nav className = "flex-column">
                <Nav.Link><div className = "calendar"/></Nav.Link>
                <Nav.Link><div className = "contact"/></Nav.Link>
                <Nav.Link><div className = "keep"/></Nav.Link>
            </Nav>
        </div>
    )
}
