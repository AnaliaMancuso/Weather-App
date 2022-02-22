import React from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";
import AppFrame from "../components/AppFrame";
import CityList from './../components/CityList'


const cities = [
    {city:"Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city:"Montevideo", country: "Uruguay", countryCode: "UY"},
    {city:"Madrid", country: "España", countryCode: "ES"},
    {city:"Santiago", country: "Chile", countryCode: "CL"},
    {city:"Asuncion", country: "Paraguay", countryCode: "PY"},
    {city:"bogota", country: "colombia", countryCode: "CO"},
    {city:"ciudad de mexico", country: "mexico", countryCode: "MX"},
    {city:"rio de janeiro", country: "brasil", countryCode: "BR"},


] 
const MainPage = (props) => {
  const history = useHistory();
  const onClickHAndler = () => {
    history.push("/city");
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHAndler}/>
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
