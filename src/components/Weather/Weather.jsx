import React from "react";
import PropTypes from "prop-types";
import { Grid, Skeleton } from "@mui/material";
import { Typography } from "@mui/material";
import { IconContext } from "react-icons/lib";
import IconState from "./../IconState";

const Weather = ({ temperature, state }) => {
  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <IconContext.Provider value={{ size: "6em" }}>
        {state ? (
          <IconState state={state} />
        ) : (
          <Skeleton
            variant="circular"
            animation="wave"
            width={80}
            height={80}
          />
        )}
      </IconContext.Provider>
      {temperature ? (
        <Typography display="inline" variant="h2">{temperature}</Typography>
      ) : (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={80}
          height={80}
        />
      )}
    </Grid>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number,
  state: PropTypes.string,
};

export default Weather;
