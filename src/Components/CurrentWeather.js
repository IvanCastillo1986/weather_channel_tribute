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
            console.log(res.data)
            setWeatherData(res.data)
            setLoading(false)
        })

    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='CurrentWeather'>
            <div className='leftDiv'>
                <p className='temp'>°</p>
                <p></p>
                <p>Wind: </p>
            </div>
            <div className='rightDiv'>
                <span className='city'></span>
                <div>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Dewpoint: {}°</p>
                    <p>Ceiling: ft.</p>
                    <p>Visibility: {weatherData.visibility}mi.</p>
                    <p>Pressure: {weatherData.main.pressure}</p>
                    <p>Wind Chill: {Math.floor(weatherData.main.feels_like)}°</p>
                </div>
            </div>
        </div>
    )
}
