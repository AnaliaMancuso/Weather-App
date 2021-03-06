import React, { useState, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CityPage from "./pages/CityPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  const [allWeather, setAllWeather] = useState({});
  const [allChartData, setAllChartData] = useState({});
  const [allForecastItemList, setForecastItemList] = useState({});
  const onSetAllWeather = useCallback(
    (weatherCity) => {
      setAllWeather((allWeather) => ({ ...allWeather, ...weatherCity }));
    },
    [setAllWeather]
  );
  const onSetChartData = useCallback((chartDataCity) => {
    setAllChartData((allChartData) => ({ ...allChartData, ...chartDataCity }));
  }, [setAllChartData]);
  const onSetForecastItemList = useCallback((forecastItemListCity) => {
    setForecastItemList((allForecastItemList) => ({
      ...allForecastItemList,
      ...forecastItemListCity,
    }));
  }, [setForecastItemList]);

  const actions = useMemo(
    () => ({
      onSetAllWeather,
      onSetChartData,
      onSetForecastItemList,
    }),
    [onSetAllWeather, onSetChartData, onSetForecastItemList]
  );
  const data = useMemo(
    () => ({
      allWeather,
      allChartData,
      allForecastItemList,
    }),
    [allWeather, allChartData, allForecastItemList]
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/main">
          <MainPage data={data} actions={actions} />
        </Route>
        <Route path="/city/:countryCode/:city">
          <CityPage data={data} actions={actions} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
