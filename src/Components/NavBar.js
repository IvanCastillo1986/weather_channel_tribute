import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NavBar() {


    return (
        <Navbar>
            <Nav>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/weather'>Forecast</Nav.Link>
            </Nav>
        </Navbar>
    )
}
