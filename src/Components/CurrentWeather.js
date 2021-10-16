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
            setWeatherData(res.data.observations[0])
            setLoading(false)
        })
    }, [API])
    console.log(weatherData)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='CurrentWeather'>
            <div className='leftDiv'>
                <p className='temp'>{weatherData.temp}°</p>
                <p>{weatherData.wx_phrase}</p>
                <p>Wind: {weatherData.wdir} &nbsp; {weatherData.wspd}</p>
            </div>
            <div className='rightDiv'>
                <span className='city'>{weatherData.obs_name}</span>
                <div>
                    <p>Humidity: {Math.round(weatherData.rh)}%</p>
                    <p>Dewpoint: {weatherData.dewPt}°</p>
                    <p>Ceiling: {weatherData.icon_extd}</p>
                    <p>Visibility: {weatherData.vis}mi.</p>
                    <p>Pressure: {weatherData.pressure}</p>
                    <p>Wind Chill: {weatherData.wc}°</p>
                </div>
            </div>
        </div>
    )
}
