import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import WeatherCard from './WeatherCard'



export default function ThreeDayWeather() {

    const [ weather, setWeather ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const API = apiURL(false)

    useEffect(() => {
        axios.get(`${API}`)
        .then(res => {
            setWeather(res.data.DailyForecasts)
        })
        .then(res => setIsLoading(false))

    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    
    
    return (
        <div className='ThreeDayWeather'>
            <WeatherCard 
                day={weather[2]}
            />
            <WeatherCard 
                day={weather[3]}
                />
            <WeatherCard 
                day={weather[4]}
            />
        </div>
    )
}
