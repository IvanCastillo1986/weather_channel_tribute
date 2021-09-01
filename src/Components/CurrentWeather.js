import React, { useState, useEffect } from 'react'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'


export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const API = apiURL()

    useEffect(() => {
        axios.get(`${API}`)
        .then(res => {
            setWeatherData(res.data)
            setLoading(false)
        })
    }, [API])
    console.log(weatherData.currentConditions)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='CurrentWeather'>
            <div className='leftDiv'>
                <p className='temp'>{weatherData.currentConditions.temp}°</p>
            </div>
            <div className='rightDiv'>
                <span className='city'>{weatherData.address}</span>
                <div>
                    <p>Humidity: </p>
                    <p>Dewpoint: </p>
                    <p>Ceiling: </p>
                    <p>Visibility: </p>
                    <p>Pressure: </p>
                    <p>Wind Chill: </p>
                </div>
            </div>
        </div>
    )
}
