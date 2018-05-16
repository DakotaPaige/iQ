import React from "react";
import ComputerScienceContainer from "./ComputerScienceContainer";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import QuizResults from "../../../api/quizresults";

const Testing = props => {
  let showQuestion23 = () => {
    props.showQuestions();
  };
  return (
    <div>
      <h1>it works</h1>
      <button onClick={showQuestion23}> click here</button>
    </div>
  );
};

export default Testing;
