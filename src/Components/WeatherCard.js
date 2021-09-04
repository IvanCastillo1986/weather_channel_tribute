import React from 'react'


export default function WeatherCard({ day }) {

    let today = new Date(day.datetime.split('-').join(','))
    
    const options = {weekday: 'short'}
    today = new Intl.DateTimeFormat('en-US', options).format(today)

    return (
        <div className='WeatherCard'>
                <p className='Day'>{today}</p>
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
