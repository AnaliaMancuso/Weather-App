
const cities = [
    {city:"Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city:"Montevideo", country: "Uruguay", countryCode: "UY"},
    {city:"Madrid", country: "España", countryCode: "ES"},
    {city:"Santiago", country: "Chile", countryCode: "CL"},
    {city:"Asuncion", country: "Paraguay", countryCode: "PY"},
    {city:"bogota", country: "colombia", countryCode: "CO"},
    {city:"ciudad de mexico", country: "mexico", countryCode: "MX"},
    {city:"rio de janeiro", country: "brasil", countryCode: "BR"},


] 
export const getCities =()=> (cities)

export const getCountryNameByCountryCode =(countryCode)=> (cities.filter(c=> c.countryCode === countryCode)[0].country)