import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {


    return (
        <div className='Navbar'>
            <nav className='flex-column'>
                <Link to='/'>Home</Link>
                <Link to='/current'>Current Weather</Link>
                <Link to='/3day'>3-Day Forecast</Link>
                <Link to='/about'>About Me</Link>
            </nav>
        </div>
    )
}
