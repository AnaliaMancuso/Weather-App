import React from "react";
import { Grid } from "@mui/material";
import AppFrame from "../components/AppFrame";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";

const dataExample = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];
const forecastItemLists = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
  { hour: 1, state: "cloud", temperature: 7, weekDay: "Martes" },
  { hour: 12, state: "rain", temperature: 1, weekDay: "Jueves" },
  { hour: 16, state: "cloud", temperature: 15, weekDay: "Lunes" },
  { hour: 19, state: "sunAndCloud", temperature: 12, weekDay: "Miercoles" },
  { hour: 10, state: "rain", temperature: 30, weekDay: "Sabado" },
  { hour: 5, state: "sunny", temperature: 4, weekDay: "Domingo" },
  { hour: 8, state: "cloud", temperature: 0, weekDay: "Viernes" },
  { hour: 9, state: "sunAndCloud", temperature: 3, weekDay: "Domingo" },
];
const CityPage = () => {
  const city = "Buenos";
  const country = "arg";
  const state = "sunny";
  const temperature = 20;
  const humidity = 70;
  const wind = 25;
  const data = dataExample;
  const forecastItemList = forecastItemLists;
  return (
    <AppFrame>
    <Grid container justify="center" direction="column">
      <Grid container justifyContent="center" item xs={12}>
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid container item justifyContent="center" alignContent="center">
        <Weather state={state} temperature={temperature} />
        <WeatherDetails humidity={humidity} wind={wind} />
      </Grid>
      <Grid  container item justifyContent="center" alignContent="center">
        <ForecastChart data={data} />
      </Grid>
      <Grid item >
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
    </AppFrame>
  );
};

export default CityPage;
