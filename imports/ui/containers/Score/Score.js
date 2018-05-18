import React from "react";
import ComputerScienceContainer from "../ComputerScienceQuestion";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

let goBackHome = () => {
  Meteor.call("scores.dropData");
  Meteor.call("questions.dropData");
};

const Score = props => {
  Meteor.call("users.addGamePlayed");
  return (
    <div>
      {props.scores.map((score, index) => {
        return (
          <div key={index}>
            <h1>Score is {score.points}</h1>
            <Link to="/">
              <button onClick={goBackHome}>Go back home</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const ScoreC = withTracker(() => {
  Meteor.subscribe("scores");
  return {
    scores: Scores.find({ points: { $gt: 1 } }).fetch()
  };
})(Score);

export default ScoreC;
