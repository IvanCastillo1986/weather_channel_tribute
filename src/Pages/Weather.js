import React from 'react'
import CurrentWeather from '../Components/CurrentWeather'
import './Weather.css'


export default function Weather() {


    return (
        <div className='Weather'>
            <h1>Weather Forecast</h1>
            <CurrentWeather />
        </div>
    )
}
