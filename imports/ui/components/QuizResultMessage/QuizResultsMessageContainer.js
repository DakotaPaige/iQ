import QuizResults from "../../../api/quizresults";
import { withTracker } from "meteor/react-meteor-data";
import React from "react";
import { Questions } from "../../../api/questions";

//true or false state for correct answer
const QuizResultsMessageContainer = props => {
  return (
    <div>
      <h1>{props.resultsMessage && props.resultsMessage.message}</h1>
      {/* {props.questionAnswer.map((question, index) => {
        return (
          <div>
            <h1>{question.correct}</h1>
          </div>
        );
      })} */}
    </div>
  );
};

const QRContainer = withTracker(() => {
  Meteor.subscribe("questions");
  const resultsMessage = QuizResults.findOne({ answer: true });
  return {
    resultsMessage,
    questionAnswer: Questions.find().fetch()
  };
})(QuizResultsMessageContainer);

export default QRContainer;
