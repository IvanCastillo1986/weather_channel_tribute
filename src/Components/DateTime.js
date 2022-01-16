import React, { useState } from 'react'



export default function DateTime() {

    const date = new Date()

    let myHours = date.getHours()
    // if (String(myHours).length < 2) myHours = '0' + myHours

    let myMinutes = date.getMinutes()
    if (String(myMinutes).length < 2) myMinutes = '0' + myMinutes

    let mySeconds = date.getSeconds()
    if (String(mySeconds).length < 2) mySeconds = '0' + mySeconds
    console.log(mySeconds)

    const myDay = date.toDateString().slice(0, -5)
    console.log('myDay', myDay)

    const [myTime] = useState(`${myHours} : ${myMinutes} : ${mySeconds}`)


    return (
        <span className='DateTime'>
            <div>{myTime}{myHours <= 12 ? <span> AM</span> : <span> PM</span>}</div>
            <div>{myDay.toUpperCase()}</div>
        </span>
    )
}
