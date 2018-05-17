import React from "react";
import ComputerScienceContainer from "../ComputerScienceQuestion";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Score = props => {
  return (
    <div>
      {props.scores.map((score, index) => {
        return (
          <div key={index}>
            <h1>Score is {score.points}</h1>
            <Link to="/">
              <button onClick={props.goBackHome}>Go back home</button>
            </Link>
          </div>
        );
      })}
      <button onClick={props.showQuestions}> click here</button>
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
