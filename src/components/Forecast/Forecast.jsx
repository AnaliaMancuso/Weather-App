import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import ForecastItem from "./../ForecastItem";

const renderForecastItem = (forecast) => {
  const { weekDay, hour, state, temperature } = forecast;
  return (
    <Grid 
      data-testid="forecast-item-container" 
      item key={`${weekDay}${hour}`}
    >
      <ForecastItem
        hour={hour}
        weekDay={weekDay}
        state={state}
        temperature={temperature}
      />
    </Grid>
  );
};
const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justifyContent="space-around" alignContent="center" >
      {forecastItemList.map((forecast) => renderForecastItem(forecast))}
    </Grid>
  );
};
//array de elementos
Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ),
};

export default Forecast;
