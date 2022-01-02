const apiURL = () => {
    return `https://api.openweathermap.org/data/2.5/weather?zip=11418,us&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
}

module.exports = { apiURL }