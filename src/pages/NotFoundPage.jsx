import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { IconContext } from "react-icons";
import { WiRain } from "react-icons/wi";
import {Link as RouterLink} from 'react-router-dom'

const NotFoundPage = () => {
  return (
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
              <WiRain />
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
              404 | Oops! Page not found
            </Typography>
            <Link color="inherit" aria-label="menu" component={RouterLink} to="/">
              Volver al inicio
            </Link>
          </Grid>
        </div>
      </Grid>
  );
};

export default NotFoundPage;
