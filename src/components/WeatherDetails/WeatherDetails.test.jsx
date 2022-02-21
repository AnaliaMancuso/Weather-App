import React from 'react'
import {render} from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test("WeatherDetails render", async()=>{
    const {findByText} = render(<WeatherDetails wind={12} humidity={45} />)

    //esto es una expresion regular donde va a buscar el 10, como antes usaba para identificar los signos +-*/
    //regexp
    const wind = await findByText(/12/)
    const humidity = await findByText(/45/)

    expect(wind).toHaveTextContent("Viento: 12 km/h")
    expect(humidity).toHaveTextContent("Humedad: 45 %")


})