const apiURL = (urlIsCurrentWeather) => {
    return (
        urlIsCurrentWeather 
        ?
        `https://api.openweathermap.org/data/2.5/weather?zip=11418,us&appid=${process.env.REACT_APP_API_KEY_CURRENT}&units=imperial`
        :
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/4174_PC?apikey=${process.env.REACT_APP_API_KEY_THREEDAY}&details=true`
    )
}

module.exports = { apiURL }