import React from "react";
import MainMenu from "../../components/MainMenu";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";

const HomePage = props => {
  return props.currentUser && props.currentUser.profile.superuser ? (
    <div>
      <MainMenu />
    </div>
  ) : (
    <div>
      <h1 className="textloop">
        <TextLoop>
          <div>Have Fun!</div>
          <div>Stay Smart.</div>
          <div>Be Competitive.</div>
          <div>Dont Cheat!</div>
        </TextLoop>
      </h1>
      <button type="button" value="Leaderboard" className="btn btn-primary">
        <Link to="/Leaderboard">Leaderboard</Link>
      </button>
    </div>
  );
};

export default HomePage;
