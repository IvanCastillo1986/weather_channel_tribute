import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import DropdownMenu from './DropdownMenu'

import './NavBar.css'



export default function NavBar() {

    // ToDo: add dropdown menu when clicked

    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)



    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [window.innerWidth])


    return (
        <>
            <div className='overlay' onClick={() => setShowDropdownMenu(!showDropdownMenu)} style={{"display" : showDropdownMenu ? "block" : "none"}}></div>

            {windowWidth > 770
            ?
            <div className='NavBar'>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/current'>Current</Link>
                    <Link to='/3day'>3-Day</Link>
                    <Link to='/about'>About Me</Link>
                </nav>
            </div>
            :
            <div className='MenuContainer'>
                <div className='MenuNav' onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
                    <Hamburger />
                    <div className='Menu'>
                        Menu
                        {showDropdownMenu &&
                            <DropdownMenu />
                        }
                    </div>
                </div>
            </div>
            }
        </>
    )
}
