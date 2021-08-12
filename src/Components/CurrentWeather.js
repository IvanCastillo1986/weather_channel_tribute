import React, { useState, useEffect } from 'react'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'


export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState({})

    const API = apiURL()
    console.log(API)
    useEffect(() => {
        axios.get(`${API}`)
        .then(res => setWeatherData(res.data))
    }, [])

    return (
        <div>
            <h1>Current Weather</h1>
        </div>
    )
}
