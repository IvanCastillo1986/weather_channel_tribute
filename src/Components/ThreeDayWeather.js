import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'



export default function ThreeDayWeather() {

    const [ weather, setWeather ] = useState({})

    useEffect(() => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Queens%2C%20NY/next2days?unitGroup=us&key=3LBCQN3X7PM6J5L92ZBUUJEZ8`)
        .then(res => setWeather(res.data))
    }, [])
    console.log(weather.days)


    return (
        <div className='ThreeDayWeather'>
            { 
            weather.days ?
            weather.days.map((day, i) => {
                return <WeatherCard key={i} day={day} />
            }) 
            : null 
            }
        </div>
    )
}
