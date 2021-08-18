import React from 'react'
import CurrentWeather from '../Components/CurrentWeather'
import './Current.css'


export default function Weather() {


    return (
        <div className='Weather'>
            <h1>Current Weather</h1>
            <CurrentWeather />
        </div>
    )
}
