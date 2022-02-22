import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ListItemButton from "@mui/material/ListItemButton";
import { Grid } from "@mui/material";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";
import convertUnits from 'convert-units';

const renderCityAndCountry =
  (eventOnClickCity) => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry;

    return (
      <ListItemButton key={city} onClick={eventOnClickCity}>
        <Grid container justify="center" alignItems="center">
          <Grid item md={8} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item md={4} xs={12}>
            {weather ? (
              <Weather
                temperature={weather.temperature}
                state={weather.state}
              />
            ) : (
              "no hay datos"
            )}
          </Grid>
        </Grid>
      </ListItemButton>
    );
  };
const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const appKey = "0cda4948b4e12ea2f223287a7d13d32c";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appKey}`;

      axios.get(url).then((response) => {
        const { data } = response;
        const temperature = Math.trunc(convertUnits(data.main.temp).from("K").to("C")) 
        const state = data.weather[0].main.toLowerCase();
        const propName = `${city}-${country}`;
        const propValue = { temperature, state };
        setAllWeather((allWeather) => ({
          ...allWeather,
          [propName]: propValue,
        }));
      });
    };
    cities.forEach(({ city, country }) => {
      setWeather(city, country);
    });
  }, [cities]);

  // const weather = {temperature: 10, state: "rain"}
  return (
    <ul>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(
          cityAndCountry,
          allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]
        )
      )}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
