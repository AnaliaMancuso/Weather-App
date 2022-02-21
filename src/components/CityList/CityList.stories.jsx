import React from 'react'
import CityList from './CityList'
import {action} from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}
const cities = [
    {city:"Buenos Aires", country: "Argentina"},
    {city:"Montevideo", country: "Uruguay"},
    {city:"Santiago", country: "Chile"},
    {city:"Asuncion", country: "Paraguay"},

]
export const CityListExample = ()=> <CityList cities={cities} onClickCity={action("click en city")}/>