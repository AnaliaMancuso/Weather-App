import React from 'react'
import Forecast from './Forecast'
import {render} from '@testing-library/react'

const forecastItemList=[
    {hour: 18, state: "clear", temperature:17, weekDay:"Jueves"},
    {hour: 1, state: "clouds", temperature:7, weekDay:"Martes"},
    {hour: 12, state: "rain", temperature:1, weekDay:"Jueves"},
    {hour: 16, state: "clouds", temperature:15, weekDay:"Lunes"},
]

test('Forecast render', async()=>{
    const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList} />)
    const forecastItems= await findAllByTestId("forecast-item-container")
    expect(forecastItems).toHaveLength(4)
})