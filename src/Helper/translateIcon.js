function translateIconNumber(icon) {
    if (icon <= 2) return 'num6' // sunny
    else if (icon <= 4) return 'num11' // lightly cloudy
    else if (icon <= 6) return 'num10' // moderately cloudy
    else if (icon <= 11) return 'num7' // cloudy or foggy
    else if (icon >= 12 && icon <= 14) return 'num2' // light rain
    else if (icon >= 15 && icon <= 17) return 'num12' // thunderstorms
    else if (icon === 18) return 'num13' // heavy rain
    else if (icon >= 19 && icon <= 21) return 'num1' // flurries
    else if (icon === 22 || icon === 23) return 'num4' // snow
    else if (icon === 24) return 'num15' // ice
    else if (icon === 25) return 'num3' // sleet
    else if (icon === 26) return 'num14' // freezing rain
    else if (icon === 29) return 'num28' // rain and snow
    else return 'num16' //  Not Found / Unknown
}

export default translateIconNumber
