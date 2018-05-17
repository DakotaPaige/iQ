import React from "react";
import GeneralKContainer from "./GeneralKContainer";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import QuizResults from "../../../api/quizresults";
import { withTracker } from "meteor/react-meteor-data";

const QuestionResult = props => {
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
      <button onClick={props.showQuestions}> click here</button>
    </div>
  );
};

const QuestionResultContainer = withTracker(() => {
  Meteor.subscribe("questions");
  return {
    questionAnswer: Questions.find().fetch()
  };
})(QuestionResult);

export default QuestionResultContainer;
