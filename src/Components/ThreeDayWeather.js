import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function ThreeDayWeather() {

    const [ weather, setWeather ] = useState({})

    useEffect(() => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Queens%2C%20NY/next2days?unitGroup=us&key=3LBCQN3X7PM6J5L92ZBUUJEZ8`)
        .then(res => setWeather(res.data))
    }, [])


    return (
        <div>
            <h1>Three Day Weather</h1>
        </div>
    )
}
