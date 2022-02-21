import React from "react";
import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";
import { Grid } from "@mui/material";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;
  return (
    <ListItemButton key={city} onClick={eventOnClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Weather temperature={15} state="sunny" />
        </Grid>
      </Grid>
    </ListItemButton>
  );
};
const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(cityAndCountry)
      )}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
