import React from 'react'
import { Navbar , Form , Button} from 'react-bootstrap'
import { HiOutlineCog , HiOutlineMenu, HiOutlineViewGrid , HiOutlineQuestionMarkCircle , HiOutlineSearch} from 'react-icons/hi'
import img from '../../Assets/logogmail.png'

export default function Navibar(props) {
    return (
        <div>
             <Navbar variant="light" fixed="top">
                <Button className = "btn-toggler" onClick = {() => props.onShow()}><HiOutlineMenu size = "20"/></Button>
                <Navbar.Brand href="#home">
                    <img src = {img} className = "img-brand" width = "109" height = "40" alt = "img"/>
                </Navbar.Brand>
                <div className = "search">
                    <Form inline>
                        <Button className = "btn-search"><HiOutlineSearch size ="20"/></Button>
                        <input placeholder = "Buscar correo" className = "input-search"></input>
                    </Form>
                </div>
                <div className = "button-group">
                    <Button className = "btn-asystency"><HiOutlineQuestionMarkCircle size = "25"/></Button>
                    <Button className = "btn-config"><HiOutlineCog size = "25"/></Button>
                    <Button className = "btn-apps"><HiOutlineViewGrid size = "25"/></Button>
                </div>
            </Navbar> 
        </div>
    )
}
