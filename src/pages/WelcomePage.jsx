import React from "react";
import WelcomeSreen from "../components/WelcomeScreen";
import { Grid, Typography, Link } from "@mui/material";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import {Link as RouterLink} from 'react-router-dom'

const WelcomePage = () => {
  return (
    <WelcomeSreen>
      <Grid
        container
        className="full"
        direction="column"
        justifyContent="center"
      >
        <div className="highlight">
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <IconContext.Provider value={{ size: "6em" }}>
              <WiDaySunny />
            </IconContext.Provider>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignContent="center"
          >
            <Typography variant="h4" color="inherit">
              weather app
            </Typography>
            <Link color="inherit" aria-label="menu" component={RouterLink} to="/main">
              ingresar
            </Link>
          </Grid>
        </div>
      </Grid>
    </WelcomeSreen>
  );
};

export default WelcomePage;
