import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import './DropdownMenu.css'


export default function DropdownMenu() {

    const history = useHistory()


    return (
        <div className='DropdownMenu'>
            <ul>
                <li onClick={() => history.push('/')}>Home</li>
                <li onClick={() => history.push('/current')}>Current</li>
                <li onClick={() => history.push('/3day')}>3-Day</li>
                <li onClick={() => history.push('/about')}>About</li>
            </ul>
        </div>
    )
}
