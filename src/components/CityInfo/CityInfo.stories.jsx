import React from "react";
import CityInfo from "./CityInfo";
import '@fontsource/roboto/700.css';

export default {
  title: "CityInfo",
  component: CityInfo,
};

export const CityExample = () => (
  <CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>
);
