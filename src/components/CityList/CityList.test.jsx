
import React from 'react';
import {render} from '@testing-library/react';
import CityList from './CityList';
const cities = [
    {city:"Buenos Aires", country: "Argentina"},
    {city:"Montevideo", country: "Uruguay"},
    {city:"Santiago", country: "Chile"},
    {city:"Asuncion", country: "Paraguay"},

]
test("cityList renders", async()=>{
    const {findAllByRole}= render(<CityList cities={cities}/>)
    const items = await findAllByRole("listitem")
    expect(items).toHaveLength(4)
})