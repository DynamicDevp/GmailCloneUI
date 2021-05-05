import React from 'react'
import { Button } from 'react-bootstrap';
import TopIcons from './TopContentData';
import './Style.css'
export default function TopContent(props) {
    return (
        <div className = {props.Show ? "top-content active" :"top-content"}>
            <Button className = "top-btn">50 de 2000</Button>
            {
                TopIcons.map((item, index) => (
                    <Button className = "top-btn" key = {index}>
                        {item.icon}
                    </Button>
                ))
            }
        </div>
    )
}
