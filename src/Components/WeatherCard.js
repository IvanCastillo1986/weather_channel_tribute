import React from 'react'
import capitalize from '../Helper/capitalize'



export default function WeatherCard({ day }) {
    
    let today = new Date(day.Date)
    const options = {weekday: 'short'}
    today = new Intl.DateTimeFormat('en-US', options).format(today)


    return (
        <div className='WeatherCard'>
                <p className='Day'>{today}</p>
                <img id='num1' alt="weather icon" />
                <p>{capitalize(day.Day.IconPhrase)}</p>
                <div className='LoHiDiv'>
                    <div><span>Lo</span><span>{day.Temperature.Maximum.Value}</span></div> 
                    <div><span>Hi</span><span>{day.Temperature.Minimum.Value}</span></div> 
                </div>
        </div>
    )
}
