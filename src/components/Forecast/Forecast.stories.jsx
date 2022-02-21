import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList=[
    {hour: 18, state: "sunny", temperature:17, weekDay:"Jueves"},
    {hour: 1, state: "cloud", temperature:7, weekDay:"Martes"},
    {hour: 12, state: "rain", temperature:1, weekDay:"Jueves"},
    {hour: 16, state: "cloud", temperature:15, weekDay:"Lunes"},
    {hour: 19, state: "sunAndCloud", temperature:12, weekDay:"Miercoles"},
    {hour: 10, state: "rain", temperature:30, weekDay:"Sabado"},
    {hour: 5, state: "sunny", temperature:4, weekDay:"Domingo"},
    {hour: 8, state: "cloud", temperature:0, weekDay:"Viernes"},
    {hour: 9, state: "sunAndCloud", temperature:3, weekDay:"Domingo"},
]
export const ForecastExample = ()=>(<Forecast forecastItemList={forecastItemList}/>)