import React from 'react';
import {render} from '@testing-library/react'
import CityInfo from './CityInfo'; //SUT subject under testing

test("CityInfo render", async ()=>{

    const city = "Buenos Aires";
    const country = "Argentina";
    //arrange act asert
    const {findAllByRole} = render(<CityInfo city="Buenos Aires" country="Argentina"/>)

    const cityAndCountry = await findAllByRole("heading");

    expect(cityAndCountry[0]).toHaveTextContent(city)
    expect(cityAndCountry[1]).toHaveTextContent(country)

})