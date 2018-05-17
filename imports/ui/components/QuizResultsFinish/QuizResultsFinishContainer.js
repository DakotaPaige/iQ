import React from "react";
import ComputerScienceContainer from "../../containers/ComputerScienceQuestion";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ScoreContainer from "../../containers/Score";

const QuestionFinish = props => {
  return (
    <div>
      {props.questionAnswer.map((question, index) => {
        return (
          <div key={index}>
            {console.log(props.isCorrectAnswer)}
            {props.isCorrectAnswer == true ? (
              <div>
                <h1>Good job</h1>
              </div>
            ) : (
              <h1>Correct Answer is : {question.correct}</h1>
            )}
          </div>
        );
      })}
      <Link to="/Score">
        <button onClick={props.showQuestions}> click here</button>
      </Link>
    </div>
  );
};

const QuestionFinishContainer = withTracker(() => {
  Meteor.subscribe("questions");
  return {
    questionAnswer: Questions.find().fetch()
  };
})(QuestionFinish);

export default QuestionFinishContainer;
