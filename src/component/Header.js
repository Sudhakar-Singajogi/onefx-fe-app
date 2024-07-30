import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaEdit, FaPowerOff, FaShoppingCart, FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar bg='dark' variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand> </Navbar.Brand>
            <Nav> </Nav>
        </Container>
    </Navbar>
  )
}

export default Header