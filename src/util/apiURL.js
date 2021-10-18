const apiURL = () => {
    // return "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Queens%2C%20NY?unitGroup=us&key=3LBCQN3X7PM6J5L92ZBUUJEZ8"
    // 3-DAY: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Queens%2C%20NY/next2days?unitGroup=us&key=3LBCQN3X7PM6J5L92ZBUUJEZ8
    return "https://api.weather.com/v1/location/11418:4:US/observations/timeseries.json?language=en-US&units=e&hours=1&apiKey=8042786b38064cbb82786b3806fcbbf9"
}

module.exports = { apiURL }