import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";
import { Grid, Alert } from "@mui/material";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";
import useCityList from "./../../hooks/useCityList";
import { getCityCode } from "../../utils/utils";

const renderCityAndCountry =
  (eventOnClickCity) => (cityAndCountry, weather) => {
    const { city, countryCode } = cityAndCountry;

    return (
      <ListItemButton
        key={getCityCode(city, countryCode)}
        onClick={() => eventOnClickCity(city, countryCode)}
      >
        <Grid container justify="center" alignItems="center">
          <Grid item md={8} xs={12}>
            <CityInfo city={city} country={countryCode} />
          </Grid>
          <Grid item md={4} xs={12}>
            <Weather
              temperature={weather && weather.temperature}
              state={weather && weather.state}
            />
          </Grid>
        </Grid>
      </ListItemButton>
    );
  };

const CityList = ({ cities, onClickCity, actions, data }) => {
  const {allWeather}= data
  const { onSetAllWeather } = actions;
  const { error, setError } = useCityList(cities, onSetAllWeather, allWeather);
  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <ul>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </ul>
    </div>
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
