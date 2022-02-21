import React from 'react';
import ForecastItem from './ForecastItem';
import {render} from '@testing-library/react';

test("ForecastItem render", async()=> {
    const {findByText} = render (<ForecastItem temperature={10} hour={5} weekDay="Martes" state="sunny"/>)

    const temperature = await findByText(/10/)
    const hour = await findByText(/5/)
    const weekDay = await findByText("Martes")

    expect(temperature).toHaveTextContent("10")
    expect(hour).toHaveTextContent("5")
    expect(weekDay).toHaveTextContent("Martes")
    
})
