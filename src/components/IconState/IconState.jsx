import React from 'react'
import PropTypes from 'prop-types'
import {
    WiCloudy,
    WiDaySunnyOvercast,
    WiRain,
    WiDaySunny,
  } from "react-icons/wi";
   
  const stateByName = {
    cloud: WiCloudy,
    sunAndCloud: WiDaySunnyOvercast,
    rain: WiRain,
    sunny: WiDaySunny,
  };
const IconState = ({state}) => {
    const StateByName =stateByName[state]
  return (
    <StateByName/>
  )
}

IconState.propTypes = {
    state: PropTypes.string.isRequired,
}

export default IconState