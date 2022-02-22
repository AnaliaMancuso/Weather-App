import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList=[
    {hour: 18, state: "clear", temperature:17, weekDay:"Jueves"},
    {hour: 1, state: "clouds", temperature:7, weekDay:"Martes"},
    {hour: 12, state: "rain", temperature:1, weekDay:"Jueves"},
    {hour: 16, state: "snow", temperature:15, weekDay:"Lunes"},
    {hour: 19, state: "thunderstorm", temperature:12, weekDay:"Miercoles"},
    {hour: 10, state: "rain", temperature:30, weekDay:"Sabado"},
    {hour: 5, state: "clear", temperature:4, weekDay:"Domingo"},
    {hour: 8, state: "drizzle", temperature:0, weekDay:"Viernes"},
    {hour: 9, state: "thunderstorm", temperature:3, weekDay:"Domingo"},
]
export const ForecastExample = ()=>(<Forecast forecastItemList={forecastItemList}/>)