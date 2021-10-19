import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'



export default function ThreeDayWeather() {

    const [ weather, setWeather ] = useState({})
    const [ currentStatus, setCurrentStatus ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        axios.get(`https://api.weather.com/v3/wx/forecast/daily/3day?postalKey=11418:US&units=e&language=en-US&format=json&apiKey=8042786b38064cbb82786b3806fcbbf9`)
        .then(res => {
            setWeather(res.data);
            setIsLoading(false);
            return res.data
        }).then(res => {
            if (res.daypart[0].wxPhraseLong[0] === null) {
                setCurrentStatus(res.daypart[0].wxPhraseLong[1])
            }
            else {
                setCurrentStatus(res.daypart[0].wxPhraseLong[0])
            }
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    
    
    return (
        <div className='ThreeDayWeather'>
            <WeatherCard 
                day={weather.dayOfWeek[0]} 
                status={currentStatus}
                lo={weather.calendarDayTemperatureMin[0]}
                hi={weather.calendarDayTemperatureMax[0]}
            />
            <WeatherCard 
                day={weather.dayOfWeek[1]} 
                status={weather.daypart[0].wxPhraseLong[2]}
                lo={weather.calendarDayTemperatureMin[1]}
                hi={weather.calendarDayTemperatureMax[1]}
            />
            <WeatherCard 
                day={weather.dayOfWeek[2]} 
                status={weather.daypart[0].wxPhraseLong[4]}
                lo={weather.calendarDayTemperatureMin[2]}
                hi={weather.calendarDayTemperatureMax[2]}
            />
        </div>
    )
}
