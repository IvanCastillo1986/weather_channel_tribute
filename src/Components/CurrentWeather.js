import React, { useState, useEffect } from 'react'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'
import { Container } from 'react-bootstrap'

import WeatherCard from './WeatherCard'


export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState({})

    const API = apiURL()
    console.log(API)
    useEffect(() => {
        axios.get(`${API}`)
        .then(res => setWeatherData(res.data))
    }, [API])

    return (
        <Container fluid>
            <h1>Current Weather</h1>
            <h3>Weather for {weatherData.resolvedAddress}</h3>
            {
            weatherData ?
            <WeatherCard weatherData={weatherData}/>
            : null
            }
        </Container>
    )
}
