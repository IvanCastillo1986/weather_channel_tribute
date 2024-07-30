import React, { useState, useEffect } from 'react'



export default function DateTime() {

    const [time, setTime] = useState('')
    const [meridian, setMeridian] = useState('')
    const [day, setDay] = useState('')
    

    function updateTime() {
        const newDateObj = new Date()
        const newTime = newDateObj.toLocaleTimeString().split(/[: ]/)

        const hours = newTime[0]
        const minutes = newTime[1]
        if (minutes.length < 2) minutes = '0' + minutes
        const seconds = newTime[2]
        if (seconds.length < 2) seconds = '0' + seconds
        
        setTime(`${hours} : ${minutes} : ${seconds}`)
        
        const newMeridian = newTime[3]
        setMeridian(newMeridian)

        const newDay = newDateObj.toDateString().slice(0, -5)
        setDay(newDay)
    }
    
    useEffect(() => {
        setInterval(() => {
            updateTime()
        }, 1000)
    }, [])



    return (
        <span className='DateTime'>
            <div>{time} {meridian}</div>
            {/* <div>{myTime}{myHours <= 12 ? <span> AM</span> : <span> PM</span>}</div> */}
            {/* <div>{myHours}</div> */}
            <div>{day.toUpperCase()}</div>
        </span>
    )
}