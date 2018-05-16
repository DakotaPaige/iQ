import React from "react";
import ComputerScienceContainer from "./ComputerScienceContainer";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import QuizResults from "../../../api/quizresults";

const Question = props => {
  let quizzes = props.allQuestions.results;
  const newQuestions = [];
  let current = props.current;
  //temporarary answer
  //ask if we need splice or can we just fix that
  //no pushes inside render
  let correctAnswer = props.answer.splice(10, 10);
  let incorrectAnswer = props.incorrectAnswer;
  let score = props.score;
  let allQuestions = [];
  let newQuizzes = quizzes;

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
                {props.addQuestions(question)}
                {allQuestions.push(question.correct_answer)}
                {question.incorrect_answers.map((answers, index) => {
                  allQuestions.push(answers);
                })}
              </div>
            ) : null}
          </div>
        );
      });
  }

  // console.log(newQuestions);
  //mongo handle
  // console.log(correctAnswer);
  console.log(incorrectAnswer);
  incorrectAnswer.find(function(element) {
    return;
  });

  let handleChange = e => {
    e.preventDefault();
    const selected = e.target.value;
    //why is it showing only 9
    //temporary answer
    props.setCurrent(current + 1);
    let test = correctAnswer.find(function(element) {
      if (element == selected) {
        // console.log(element);
        // console.log(selected);
        Meteor.call("scores.plusScore");
        // console.log("its correct!");
        // console.log("its not working");
        // props.setScore(score + 1);
      } else if (correctAnswer.includes(selected) == false) {
        Meteor.call("scores.sameScore");
      }
    });
  };

  return (
    <div>
      <h1>Questions</h1>
      <div>
        {quizzes &&
          quizzes.map((question, index) => {
            return (
              <div key={index}>
                {current == index ? (
                  <div>
                    <br />
                    <p>{question.question}</p>
                    {allQuestions
                      .sort(function(a, b) {
                        return 0.5 - Math.random();
                      })
                      .map((question, index) => {
                        return (
                          <button
                            onClick={handleChange}
                            key={index}
                            value={question}
                          >
                            {question}
                          </button>
                        );
                      })}
                    <br />
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Question;
