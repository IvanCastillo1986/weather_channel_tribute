import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NavBar() {

    return (
        <Navbar>
            <Nav>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link>Forecast</Nav.Link>
            </Nav>
        </Navbar>
    )
}
