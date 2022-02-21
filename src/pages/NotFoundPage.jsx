import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      not found
      <div>
        <Link to="/main">ir a main</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
