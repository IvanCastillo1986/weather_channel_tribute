import React from 'react'


export default function WeatherCard({ day }) {

    console.log(day)

    return (
        <div className='WeatherCard'>
                <p>Current Forecast</p>
                <p>
                    {day.description}
                </p>
                {
                day.conditions ?
                <ul>
                    <li>Temperature: {day.temp}</li>
                    <li>Feels Like: {day.feelslike}</li>
                    <li>Humidity: {day.humidity}</li>
                    <li>Windspeed: {day.windspeed}</li>
                    <li>Conditions: {day.conditions}</li>
                </ul> :
                null
                }
        </div>
    )
}
