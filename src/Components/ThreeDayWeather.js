import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'



export default function ThreeDayWeather() {

    const [ weather, setWeather ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        axios.get(`https://api.weather.com/v3/wx/forecast/daily/3day?postalKey=11418:US&units=e&language=en-US&format=json&apiKey=8042786b38064cbb82786b3806fcbbf9`)
        .then(res => {
            setWeather(res.data);
            setIsLoading(false);
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    

    return (
        <div className='ThreeDayWeather'>
            <WeatherCard day={weather.dayOfWeek[0]} />
        </div>
    )
}
