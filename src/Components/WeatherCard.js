import React from 'react'


export default function WeatherCard({ day, status, lo, hi }) {

    // let today = new Date(day.datetime.split('-').join(','))
    
    // const options = {weekday: 'short'}
    // today = new Intl.DateTimeFormat('en-US', options).format(today)

    return (
        <div className='WeatherCard'>
                <p className='Day'>{day.slice(0, 3)}</p>
                <p>{status}</p>
                <div className='LoHiDiv'>
                    <div><span>Lo</span><span>{lo}</span></div> 
                    <div><span>Hi</span><span>{hi}</span></div> 
                </div>
        </div>
    )
}
