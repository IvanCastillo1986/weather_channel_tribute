import React from 'react'


export default function WeatherCard({ day }) {

    // let today = new Date(day.datetime.split('-').join(','))
    
    // const options = {weekday: 'short'}
    // today = new Intl.DateTimeFormat('en-US', options).format(today)

    return (
        <div className='WeatherCard'>
                <p className='Day'>{day}</p>
                <p>
                </p>
                <div className='LoHiDiv'>
                    <div><span>Lo</span><span>34</span></div> 
                    <div><span>Hi</span><span>44</span></div> 
                </div>
        </div>
    )
}
