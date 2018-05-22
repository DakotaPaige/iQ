import React from "react";
import ComputerScienceContainer from "./ComputerScienceContainer";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import "./style.css";

const Question = props => {
  let { currentQuestion } = props;
  let quizzes = props.allQuestions.results;
  let current = props.current;
  let score = props.score;
  let allAnswers = [];
  let answerValue;

  {
    Meteor.call("scores.addScore");
  }

  {
    quizzes &&
      quizzes.map((question, index) => {
        return (
          <div key={index}>
            {current == index ? (
              <div>
                {/* {props.addNumberUsers(numberOfLoggedIn)} */}
                {console.log("ADD QUESTION")}
                {props.addQuestions(question)}
                {currentQuestion && allAnswers.push(currentQuestion.correct)}
                {currentQuestion &&
                  currentQuestion.incorrect.map((answer, index) => {
                    allAnswers.push(answer);
                  })}
              </div>
            ) : null}
          </div>
        );
      });
  }
  // console.log(props.answer);

  let getValue = e => {
    e.preventDefault();
    answerValue = e.target.value;
  };

  let handleChange = () => {
    const selected = answerValue;
    //for state
    // props.showResult();
    //for props
    //check if this is correct
    Meteor.call("showresult.insertUnboolean", false);
    if (
      props.questionAnswer &&
      props.questionAnswer.correct.includes(selected) == true
    ) {
      Meteor.call("scores.plusScore");
      Meteor.call("users.plusAllScore");
      Meteor.call("users.plusComputerScore");
      props.addScore(element);
      props.setCurrent(current + 1);
      props.isCorrect();
    } else if (
      props.questionAnswer &&
      props.questionAnswer.correct.includes(selected) == false
    ) {
      Meteor.call("scores.sameScore");
      props.setCurrent(current + 1);
      props.isIncorrect();
    }
  };

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

  return (
    <div className="cardQuestion">
      <Card>
        <div>
          {quizzes &&
            quizzes.map((question, index) => {
              return (
                <div key={index}>
                  {current == index ? (
                    <div className="questionContainer">
                      <br />
                      <h2 className="card-title">
                        {currentQuestion &&
                          decodeEntities(currentQuestion.question)}
                      </h2>
                      {allAnswers &&
                        allAnswers
                          .sort(function(a, b) {
                            return 0.5 - Math.random();
                          })
                          .map((answer, index) => {
                            return (
                              <div className="card-text">
                                <button
                                  type="button"
                                  className="btn btn-outline-primary"
                                  // onClick={handleChange}
                                  onClick={getValue}
                                  key={index}
                                  value={answer}
                                >
                                  {decodeEntities(answer)}
                                </button>
                              </div>
                            );
                          })}
                      <br />
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
        {setTimeout(() => {
          handleChange();
        }, 5000)}
        {/* {Meteor.setTimeout(handleChange(), 10000)} */}
      </Card>
    </div>
  );
};

export default Question;
