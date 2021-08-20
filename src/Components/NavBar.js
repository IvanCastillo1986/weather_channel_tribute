import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NavBar() {


    return (
        <Navbar style={{backgroundColor: 'purple', width: '100%'}} >
            <Nav className='flex-column'>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/current'>Current Weather</Nav.Link>
                <Nav.Link as={Link} to='/3day'>3-Day Forecast</Nav.Link>
                <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
            </Nav>
        </Navbar>
    )
}
