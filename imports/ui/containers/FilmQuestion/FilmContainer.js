import React, { Component } from "react";
import Questionss from "./Questions";
import Score from "../Score";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class FilmContainer extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: [],
      isLoading: false,
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

  addQuestions(questions) {
    Meteor.call("questions.addQuestions", questions);
  }

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
    // Meteor.call("scores.setScore", score);
  }

  goBackHome() {
    Meteor.call("scores.dropData");
    Meteor.call("questions.dropData");
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
                score={this.state.score}
                answer={this.state.answer}
                // addScore={this.addScore.bind(this)}
                // plusScore={this.plusScore.bind(this)}
              />
            ) : (
              <div>
                {this.props.scores.map((score, index) => {
                  return (
                    <div key={index}>
                      <h1>Score is {score.points}</h1>
                      <Link to="/">
                        <button onClick={this.goBackHome}>Go back home</button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

//if points == user do that
const newFilmContainer = withTracker(() => {
  Meteor.subscribe("scores");
  return {
    scores: Scores.find({ points: { $gt: 1 } }).fetch()
  };
})(FilmContainer);

export default newFilmContainer;
