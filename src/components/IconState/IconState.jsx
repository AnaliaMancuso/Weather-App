import React from "react";
import PropTypes from "prop-types";
import {
  WiCloudy,
  WiRainMix,
  WiRain,
  WiThunderstorm,
  WiDaySunny,
  WiSnow,
} from "react-icons/wi";

const stateByName = {
  clouds: WiCloudy,
  thunderstorm: WiThunderstorm,
  clear: WiDaySunny,
  rain: WiRain,
  drizzle: WiRainMix,
  snow: WiSnow,
};
const IconState = ({ state }) => {
  const StateByName = stateByName[state];
  return <StateByName />;
};

IconState.propTypes = {
  state: PropTypes.string.isRequired,
};

export default IconState;
