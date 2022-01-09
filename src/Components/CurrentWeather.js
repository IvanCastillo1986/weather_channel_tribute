import React, { useState, useEffect } from 'react'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'
import windDir from '../Helper/windDir'
import capitalize from '../Helper/capitalize.js'


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
                <p className='temp'>{Math.round(weatherData.main.temp)}°</p>
                <p>{capitalize(weatherData.weather[0].description)}</p>
                <div className='wind'>
                    <span>Wind: </span> 
                    <span>{windDir(weatherData.wind.deg)}</span>
                    <span>{Math.round(weatherData.wind.speed)}</span>
                </div>
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
