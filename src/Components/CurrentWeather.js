import React, { useState, useEffect } from 'react'
import { apiURL } from '../util/apiURL.js'
import axios from 'axios'
import { Container } from 'react-bootstrap'


export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState({})
    const API = apiURL()

    useEffect(() => {
        axios.get(`${API}`)
        .then(res => setWeatherData(res.data))
    }, [API])

    return (
        <Container className='text-center' fluid>
            <h4>In {weatherData.resolvedAddress}</h4>
            <p>{weatherData.description}</p>
        </Container>
    )
}
