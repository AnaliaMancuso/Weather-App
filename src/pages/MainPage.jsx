import React from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";
import AppFrame from "../components/AppFrame";
import CityList from './../components/CityList'


const cities = [
    {city:"Buenos Aires", country: "Argentina"},
    {city:"Montevideo", country: "Uruguay"},
    {city:"Santiago", country: "Chile"},
    {city:"Asuncion", country: "Paraguay"},

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
