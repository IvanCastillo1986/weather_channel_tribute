import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'



export default function ThreeDayWeather() {

    const [ weather, setWeather ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/4174_PC?apikey=U2N7um6wJN5nS75oPS8rr9Y6GnGHy2k2&details=true`)
        .then(res => setWeather(res.data.DailyForecasts))
        .then(res => setIsLoading(false))

        console.log(weather)
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
