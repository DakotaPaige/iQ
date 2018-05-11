import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <Link to="/">Home Page </Link>
      <Link to="/Computer-Science"> Computer Science </Link>
      <Link to="/Film"> Film </Link>
      <Link to="/General-Knowledge"> General Knowledge </Link>
      <Link to="/Science-Nature"> Science & Nature</Link>
    </div>
  );
};

export default MainMenu;
