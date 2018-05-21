import React, { Component } from "react";
import Questionss from "./Questions";
import Score from "../Score";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import QuizResultsMessageContainer from "../../components/QuizResultMessage";
import QuizResultsFinishContainer from "../../components/QuizResultsFinish";
import { BubbleSpinLoader } from "react-css-loaders";

//ask about redirect or this way
// import { Route, Redirect } from "react-router";

class ComputerScienceContainer extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: [],
      isLoading: false,
      score: 0,
      current: 0,
      answer: [],
      incorrectAnswer: [],
      showResult: false,
      isCorrectAnswer: true,
      category: "Science: Computers"
    };
  }
  //film
  componentDidMount() {
    const questionLink =
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple";
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
  addScore(question) {
    Meteor.call("questions.addScore", question);
  }

  addRouteComputer(category) {
    Meteor.call("questions.addRouteComputer", category);
  }

  setCurrent(current) {
    this.setState({ current });
  }

  showResult() {
    this.setState({ showResult: true });
  }

  showResults() {
    this.setState({ showResult: false });
    Meteor.call("questions.dropData");
  }
  isCorrect() {
    this.setState({ isCorrectAnswer: true });
  }
  isIncorrect() {
    this.setState({ isCorrectAnswer: false });
  }

  render() {
    let quizzes = this.state.allQuestions.results;
    quizzes &&
      quizzes.map((question, index) => {
        this.state.answer.push(question.correct_answer);
        this.state.incorrectAnswer.push(question.incorrect_answers);
      });
    return (
      <div>
        {this.state.isLoading ? (
          <BubbleSpinLoader />
        ) : (
          <div>
            {this.state.current == 10 ? (
              <div>
                <QuizResultsFinishContainer
                  showResults={this.showResults.bind(this)}
                  isCorrectAnswer={this.state.isCorrectAnswer}
                  questionAnswer={this.props.questionAnswer}
                  users={this.props.users}
                />
              </div>
            ) : this.state.showResult == false ? (
              <div>
                {console.log(this.props.questionAnswer)}
                {this.addRouteComputer(this.state.category)}
                <Questionss
                  current={this.state.current}
                  setCurrent={this.setCurrent.bind(this)}
                  addQuestions={this.addQuestions.bind(this)}
                  allQuestions={this.state.allQuestions}
                  score={this.state.score}
                  answer={this.state.answer}
                  incorrectAnswer={this.state.incorrectAnswer}
                  addScore={this.addScore.bind(this)}
                  showResult={this.showResult.bind(this)}
                  isCorrectAnswer={this.state.isCorrectAnswer}
                  isCorrect={this.isCorrect.bind(this)}
                  isIncorrect={this.isIncorrect.bind(this)}
                  currentQuestion={this.props.questionAnswer}
                />
              </div>
            ) : (
              <QuizResultsMessageContainer
                showResults={this.showResults.bind(this)}
                isCorrectAnswer={this.state.isCorrectAnswer}
                questionAnswer={this.props.questionAnswer}
                users={this.props.users}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

//if points == user do that
const CSContainer = withTracker(() => {
  Meteor.subscribe("scores");
  Meteor.subscribe("questions");
  Meteor.subscribe("users");
  return {
    currentUser: Meteor.user(),
    scores: Scores.find({ points: { $gt: 1 } }).fetch(),
    questionAnswer: Questions.findOne(),
    users: Meteor.users.find().fetch()
  };
})(ComputerScienceContainer);

export default CSContainer;
