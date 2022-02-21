import React from "react";
import AppFrame from "./AppFrame";
import {BowserRouter as Router} from 'react-router-dom';

export default {
  title: "AppFrame",
  component: AppFrame,
};

export const AppFrameExample = () => (<Router><AppFrame/></Router>);

