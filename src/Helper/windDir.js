const windDir = (deg) => {
    if (deg < 20) return 'N'
    if (deg < 40) return 'NNE'
    if (deg < 60) return 'NE'
    if (deg < 80) return 'ENE'
    if (deg < 110) return 'E'
    if (deg < 130) return 'ESE'
    if (deg < 150) return 'SE'
    if (deg < 170) return 'SSE'
    if (deg < 200) return 'S'
    if (deg < 220) return 'SSW'
    if (deg < 240) return 'SW'
    if (deg < 260) return 'WSW'
    if (deg < 290) return 'W'
    if (deg < 310) return 'WNW'
    if (deg < 330) return 'NW'
    if (deg < 350) return 'NNW'
    if (deg >= 350 ) return 'N'
}

// console.log(windDir(160))

module.exports = windDir