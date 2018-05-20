import React from "react";
import ComputerScienceContainer from "../../containers/ComputerScienceQuestion";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import { withTracker } from "meteor/react-meteor-data";
import "./styles.css";

let decodeEntities = encodedString => {
  var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  var translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">"
  };
  return encodedString
    .replace(translate_re, function(match, entity) {
      return translate[entity];
    })
    .replace(/&#(\d+);/gi, function(match, numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
};

const QuestionResult = props => {
  let numberOfLoggedIn = 0;
  if (props.users && props.users) {
    numberOfLoggedIn = props.users.filter(user => user.status.online).length;
  }
  return (
    <div>
      {props.isCorrectAnswer == true ? (
        <div>
          <h1>
            Good Job
            {numberOfLoggedIn}
          </h1>
          {/* {console.log(props.numberofusers)} */}
          <h1>
            Percentage Won:
            {props.questionAnswer.correctscore / numberOfLoggedIn * 100}%
          </h1>
          <h1>
            Percentage Loss:
            {(numberOfLoggedIn - props.questionAnswer.correctscore) /
              numberOfLoggedIn *
              100}%
          </h1>
        </div>
      ) : (
        <div>
          <h1>Wrong!</h1>
          <h1>The correct answer is</h1>
          <h1 className="answer">
            {decodeEntities(props.questionAnswer.correct)}
            {numberOfLoggedIn}
            {/* {console.log(props.numberofusers)} */}
          </h1>
          <h1>
            Percentage Won:
            {props.questionAnswer.correctscore / numberOfLoggedIn * 100}%
          </h1>
          <h1>
            Percentage Loss:
            {(numberOfLoggedIn - props.questionAnswer.correctscore) /
              numberOfLoggedIn *
              100}%
          </h1>
        </div>
      )}
      <button onClick={props.showQuestions}> click here</button>
    </div>
  );
};

export default QuestionResult;
