import React from "react";
import ComputerScienceContainer from "./ComputerScienceContainer";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import QuizResults from "../../../api/quizresults";
import { withTracker } from "meteor/react-meteor-data";

const Testing = props => {
  let showQuestion23 = () => {
    props.showQuestions();
  };
  return (
    <div>
      {props.questionAnswer.map((question, index) => {
        return (
          <div>
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
      <button onClick={showQuestion23}> click here</button>
    </div>
  );
};

const TestingContainer = withTracker(() => {
  Meteor.subscribe("questions");
  return {
    questionAnswer: Questions.find().fetch()
  };
})(Testing);

export default TestingContainer;
