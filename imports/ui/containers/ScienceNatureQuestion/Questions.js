import React from "react";
import ScienceNatureContainer from "./ScienceNatureContainer";

const Question = props => {
  let quizzes = props.allQuestions.results;
  const newQuestions = [];
  let current = props.current;
  //temporarary answer
  //ask if we need splice or can we just fix that
  //no pushes inside render
  let correctAnswer = props.answer.splice(10, 10);
  let score = props.score;
  let allQuestions = [];

  //add some method to push questions with (Category, Question, Correct,Incorrect,Difficulty (Maybe))
  {
    quizzes &&
      quizzes.map((question, index) => {
        // console.log(question);
        return (
          newQuestions.push({
            answer: question.correct_answer,
            correct: true
          }),
          question.incorrect_answers.map((answers, index) => {
            newQuestions.push({ answer: answers, correct: false });
          })
        );
      });
  }
  {
    quizzes &&
      quizzes.map((question, index) => {
        return (
          <div key={index}>
            {current == index ? (
              <div>
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

  //mongo handle

  let handleChange = e => {
    e.preventDefault();
    const selected = e.target.value;
    //why is it showing only 9
    //temporary answer
    props.setCurrent(current + 1);
    let test = correctAnswer.find(function(element) {
      if (element == selected) {
        return props.setScore(score + 1);
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
