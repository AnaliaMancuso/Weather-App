import React from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";
import AppFrame from "../components/AppFrame";
import CityList from './../components/CityList'
import {getCities} from './../utils/serviceCities'


const MainPage = (props) => {
  const history = useHistory();
  const onClickHAndler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={getCities()} onClickCity={onClickHAndler}/>
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
