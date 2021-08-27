import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'



export default function NavBar() {


    return (
        <div className='NavBar'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/current'>Current</Link>
                <Link to='/3day'>3-Day</Link>
                <Link to='/about'>About Me</Link>
            </nav>
        </div>
    )
}
