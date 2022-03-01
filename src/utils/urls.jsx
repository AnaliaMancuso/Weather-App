
const appKey = "0cda4948b4e12ea2f223287a7d13d32c";

export const getForecastUrl = ({city, countryCode})=>(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appKey}`);


export const getWeatherUrl = ({city, countryCode})=> (`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appKey}`);