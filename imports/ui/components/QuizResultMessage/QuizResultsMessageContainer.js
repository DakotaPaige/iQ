import QuizResults from "../../../api/quizresults";
import { withTracker } from "meteor/react-meteor-data";
import React from "react";

const QuizResultsMessageContainer = props => {
  return (
    <div>
      <h1>{props.resultsMessage && props.resultsMessage.message}</h1>
    </div>
  );
};

const QRContainer = withTracker(() => {
  const resultsMessage = QuizResults.findOne({ answer: true });
  return {
    resultsMessage
  };
})(QuizResultsMessageContainer);

export default QRContainer;
