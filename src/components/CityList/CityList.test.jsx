
import React from 'react';
import {render} from '@testing-library/react';
import CityList from './CityList';
const cities = [
    {city:"Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city:"Montevideo", country: "Uruguay", countryCode: "UY"},
    {city:"Asuncion", country: "Paraguay", countryCode: "PY"},

]
test("cityList renders", async()=>{
    const {findAllByRole}= render(<CityList cities={cities} onClickCity={()=>{}}/>)
    const items = await findAllByRole('listitem')
    expect(items).toHaveLength(3)
})