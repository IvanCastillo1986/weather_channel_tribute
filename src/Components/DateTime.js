import React, { useState } from 'react'



export default function DateTime() {


    const date = new Date()
    const myHours = date.getHours()
    const myMinutes = date.getMinutes()
    const mySeconds = date.getSeconds()
    const myDay = date.toDateString().slice(0, -5)

    const [myTime] = useState(`${myHours} : ${myMinutes} : ${date.getSeconds()}`)


    return (
        <span className='DateTime'>
            <div>{myTime}{myHours <= 12 ? <span> AM</span> : <span> PM</span>}</div>
            <div>{myDay.toUpperCase()}</div>
        </span>
    )
}
