import React from 'react'
import { HiXCircle, HiTemplate } from 'react-icons/hi'
import { Button , Dropdown , ButtonGroup } from 'react-bootstrap'
import FormIcons from './FormFixedData'

export default function FormFixed(props) {
    return (
        <div className = "form-fixed" style = {props.Show ? {height: "590px"} : {height: "0"}}>
            <div className = "top-form">
                <span className = "top-title">Enviar Correo</span>
                <Button className = "btn-maxi"><HiTemplate size = "20"/></Button>
                <Button className = "btn-close" onClick = { () => props.onShowForm() }><HiXCircle size = "20"/></Button>
            </div>
            <div className = "form-content">
                <input placeholder = " Destinatarios" className = "input-destinatarios"/>
                <input placeholder = " Asunto" className = "input-asunto"/>
                <textarea placeholder = "Mensaje" className = "text-area"/>
            </div>
            <div className = "bottom-form">
                <Dropdown as={ButtonGroup} drop = "up">
                    <Button variant="primary">Enviar</Button>

                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {
                    FormIcons.map((item, index) => (
                        <Button key = {"btn" + index} className = "btn-icons">
                            {item.icon}
                        </Button>
                    ))
                }
            </div>
        </div>
    )
}

