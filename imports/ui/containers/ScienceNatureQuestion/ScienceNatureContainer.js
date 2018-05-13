import React, { Component } from "react";
import Questionss from "./Questions";
import Score from "../Score";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";

//ask about redirect or this way
// import { Route, Redirect } from "react-router";

class ScienceNatureContainer extends Component {
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
      "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";
    this.setState({ isLoading: true });
    fetch(questionLink)
      .then(allQuestions => allQuestions.json())
      .then(allQuestions => this.setState({ allQuestions }))
      .then(() => this.setState({ isLoading: false }))
      .catch(error => console.log(error));
  }

  addQuestions(questions) {
    Meteor.call("questions.addQuestions", questions);
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
    quizzes &&
      quizzes.map((question, index) => {
        this.state.answer.push(question.correct_answer);
      });
    return (
      <div>
        {this.state.isLoading ? (
          <p>It is Loading</p>
        ) : (
          <div>
            {this.state.current !== 10 ? (
              <Questionss
                setScore={this.setScore.bind(this)}
                current={this.state.current}
                setCurrent={this.setCurrent.bind(this)}
                addQuestions={this.addQuestions.bind(this)}
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

export default ScienceNatureContainer;
