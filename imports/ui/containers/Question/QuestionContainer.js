import React, { Component } from "react";
import Questions from "./Questions";
import Score from "../Score";
//ask about redirect or this way
// import { Route, Redirect } from "react-router";

class QuestionContainer extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: [],
      isLoading: false,
      isClicked: false,
      score: 0,
      current: 0,
      answer: []
    };
  }
  //film
  componentDidMount() {
    const questionLink =
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
    this.setState({ isLoading: true });
    fetch(questionLink)
      .then(allQuestions => allQuestions.json())
      .then(allQuestions => this.setState({ allQuestions }))
      .then(() => this.setState({ isLoading: false }))
      .catch(error => console.log(error));
  }

  setCurrent(current) {
    this.setState({ current });
  }
  setScore(score) {
    this.setState({ score });
  }
  setCorrectAnswer(answer) {
    this.setState({ answer });
  }

  render() {
    let quizzes = this.state.allQuestions.results;
    let quizzesArray = [];
    quizzes &&
      quizzes.map((question, index) => {
        this.state.answer.push(question.correct_answer);
      });
    // console.log(this.state.answer);
    let buttonClicked = () =>
      this.setState({ isClicked: !this.state.isClicked });
    return (
      <div>
        {this.state.isLoading ? (
          <p>It is Loading</p>
        ) : (
          <div>
            {this.state.current !== 10 ? (
              <Questions
                setScore={this.setScore.bind(this)}
                current={this.state.current}
                setCurrent={this.setCurrent.bind(this)}
                allQuestions={this.state.allQuestions}
                setCorrectAnswer={this.setCorrectAnswer.bind(this)}
                score={this.state.score}
                answer={this.state.answer}
              />
            ) : (
              <h1>Score is {this.state.score}</h1>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default QuestionContainer;
