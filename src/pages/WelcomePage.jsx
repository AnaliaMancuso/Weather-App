import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = (props) => {
  return (
    <div>
      welcome
      <div>
        <Link to="/main">ir a main</Link>
      </div>
    </div>
  );
};


export default WelcomePage;