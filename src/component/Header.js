import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaEdit, FaPowerOff, FaShoppingCart, FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar bg='dark' variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
            <Link to='/'>OneFX</Link>

                
            </Navbar.Brand>
            <Nav>
            <Dropdown >
                <Dropdown.Toggle variant="primary">
                    <FaUserCircle style={{fontSize:'22px'}}></FaUserCircle>                    
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><FaEdit style={{marginRight:'5px'}}></FaEdit>Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><FaPowerOff style={{marginRight:'5px'}}></FaPowerOff>Signout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header