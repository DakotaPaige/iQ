import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <Link to="/">Home Page </Link>
      <Link to="/Film"> Film </Link>
      <Link to="/Sports"> Sports </Link>
      <Link to="/Mythology"> Mythology </Link>
      <Link to="/History"> History </Link>
    </div>
  );
};

export default MainMenu;
