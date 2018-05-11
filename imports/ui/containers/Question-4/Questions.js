import React from "react";
import QuestionContainer from "./QuestionContainer";

const Question = props => {
  let quizzes = props.allQuestions.results;
  const newQuestions = [];
  let current = props.current;
  //temporarary answer
  //ask if we need splice or can we just fix that
  let correctAnswer = props.answer.splice(10, 10);
  let score = props.score;
  let allQuestions = [];
  {
    quizzes &&
      quizzes.map((question, index) => {
        // console.log(question);
        return (
          newQuestions.push({
            answer: question.correct_answer,
            correct: true
          }),
          allQuestions.push(question.correct_answer),
          question.incorrect_answers.map((answers, index) => {
            newQuestions.push({ answer: answers, correct: false }),
              allQuestions.push(answers);
          })
        );
      });
  }

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

    // console.log(test);
  };
  // console.log(score);
  //pushes outside of the array

  //how to do the random, push incorrect and correc into array, then random, then
  //for loop or map to itereate through and return button
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
                    <button
                      onClick={handleChange}
                      value={question.correct_answer}
                    >
                      {question.correct_answer}

                      {/* {console.log(allQuestions)} */}
                    </button>
                    <br />
                    {question.incorrect_answers.map((answers, index) => {
                      return (
                        <button
                          onClick={handleChange}
                          key={index}
                          value={answers}
                        >
                          {answers}
                        </button>
                      );
                    })}
                    <br />
                  </div>
                ) : null}
              </div>
            );
          })}
        {/* {console.log(quizzes)} */}
      </div>
    </div>
  );
};

export default Question;

// {quizzes &&
//   quizzes.map((question, index) => (
//     <li key={index}>{console.log(question)}</li>
//   ))}
