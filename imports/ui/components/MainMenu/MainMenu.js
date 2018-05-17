import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const MainMenu = () => {
  return (
    <div className="category-container">
      <button type="button" className="btn btn-primary">
        <Link to="/">Home Page </Link>
      </button>
      <button type="button" className="btn btn-dark">
        <Link to="/Computer-Science"> Computer Science </Link>{" "}
      </button>
      <button type="button" className="btn btn-dark">
        <Link to="/Film"> Film </Link>{" "}
      </button>
      <button type="button" className="btn btn-dark">
        <Link to="/General-Knowledge"> General Knowledge </Link>{" "}
      </button>
      <button type="button" className="btn btn-dark">
        <Link to="/Science-Nature"> Science & Nature</Link>{" "}
      </button>
      <button type="button" className="btn btn-dark">
        <Link to="/Leaderboard">Leaderboard</Link>{" "}
      </button>
    </div>
  );
};

export default MainMenu;
