import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const MainMenu = () => {
  return (
    <div>
      <Link to="/" className="iq-logo">
        <h1 className="modal-title">iQ</h1>
      </Link>
      <div className="category-container">
        <button type="button" value="Computer Science" className="btn btn-dark">
          <Link to="/Computer-Science"> Computer Science </Link>
        </button>
        <button type="button" value="Film" className="btn btn-dark">
          <Link to="/Film"> Film </Link>
        </button>
        <button
          type="button"
          value="General Knowledge"
          className="btn btn-dark"
        >
          <Link to="/General-Knowledge"> General Knowledge </Link>
        </button>
        <button type="button" value="Science & Nature" className="btn btn-dark">
          <Link to="/Science-Nature"> Science & Nature </Link>
        </button>
      </div>
      <button type="button" value="Leaderboard" className="btn btn-dark">
        <Link to="/Leaderboard">Leaderboard</Link>
      </button>
    </div>
  );
};

export default MainMenu;
