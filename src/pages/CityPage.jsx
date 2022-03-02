import React, {useMemo} from "react";
import { Grid } from "@mui/material";
import { LinearProgress } from "@mui/material";
import AppFrame from "../components/AppFrame";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import useCityPage from "../hooks/useCityPage";
import useCityList from "./../hooks/useCityList";
import { getCityCode } from "../utils/utils";
import { getCountryNameByCountryCode } from "./../utils/serviceCities";

const CityPage = ({actions, data }) => {
  const {allWeather, allChartData, allForecastItemList}=data
  const {onSetAllWeather, onSetChartData, onSetForecastItemList} = actions
  const { city, countryCode} = useCityPage(allChartData, allForecastItemList, onSetChartData, onSetForecastItemList);

  const cities = useMemo(
    () => [{ city, countryCode }],
    [city, countryCode]
  );

  useCityList(cities, onSetAllWeather, allWeather );

  const cityCode= getCityCode(city, countryCode)
  const weather = allWeather[cityCode];
  const chartData= allChartData[cityCode]
  const forecastItemList=allForecastItemList[cityCode]
  const country = countryCode && getCountryNameByCountryCode(countryCode);
  const state = weather && weather.state;
  const temperature = weather && weather.temperature;
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;

  return (
    <AppFrame>
      <Grid container justify="center" direction="column">
        <Grid container justifyContent="center" item xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item justifyContent="center" alignContent="center">
          <Weather state={state} temperature={temperature} />
          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind} />
          )}
        </Grid>
        <Grid item>
          {!chartData && !forecastItemList && <LinearProgress />}
        </Grid>
        <Grid container item justifyContent="center" alignContent="center">
          {chartData && <ForecastChart data={chartData} />}
        </Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
