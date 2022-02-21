import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { IconContext } from "react-icons/lib";
import IconState from './../IconState'

const Weather = ({ temperature, state }) => {
  return (
    <Grid container item
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
      <IconContext.Provider value={{ size: "6em" }}>
       <IconState state={state}/>
      </IconContext.Provider>
      <Typography display="inline" variant="h2">
        {temperature}
      </Typography>
    </Grid>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired
};

export default Weather;
