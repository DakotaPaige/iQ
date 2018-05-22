import React, { Component } from "react";
import Questionss from "./Questions";
import Score from "../Score";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { allQuestions } from "../../../api/allquestions";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import QuizResultsMessageContainer from "../../components/QuizResultMessage";
import QuizResultsFinishContainer from "../../components/QuizResultsFinish";
import { BubbleSpinLoader } from "react-css-loaders";
import ShowResult from "../../../api/showresult";

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
    console.log("COMPONENT IS MOUNTING");
    const questionLink =
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple";
    this.setState({ isLoading: true });
    fetch(questionLink)
      .then(allQuestions => allQuestions.json())
      .then(allQuestions => this.setState({ allQuestions }))
      .then(() => this.setState({ isLoading: false }))
      .catch(error => console.log(error));

    this.state.allQuestions.map(question => {
      Meteor.call("allquestions.AddAllQuestions", question);
    });
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
    // this.setState({ showResult: false });
    Meteor.call("showresult.insertUnboolean", true);
    Meteor.call("questions.dropData");
  }
  isCorrect() {
    this.setState({ isCorrectAnswer: true });
  }
  isIncorrect() {
    this.setState({ isCorrectAnswer: false });
  }

  render() {
    console.log(this.props.allQuestions);
    // console.log(this.props.showResultPage);
    // let quizzes = this.state.allQuestions.results;
    // console.log(this.props);
    // if (this.props.questionAnswer) {
    //   this.state.answer.push(this.props.questionAnswer.correct);
    //   this.state.incorrectAnswer.push(this.props.questionAnswer.incorrect);
    // }
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
            ) : this.props.showResultPage.showResultPage == false ? (
              <div>
                {console.log(this.props.questionAnswer)}
                {this.addRouteComputer(this.state.category)}
                <Questionss
                  current={this.state.current}
                  setCurrent={this.setCurrent.bind(this)}
                  addQuestions={this.addQuestions.bind(this)}
                  allQuestions={this.state.allQuestions}
                  score={this.state.score}
                  // answer={this.state.answer}
                  addScore={this.addScore.bind(this)}
                  //for state
                  showResult={this.showResult.bind(this)}
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
                currentUser={this.props.currentUser}
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
  Meteor.subscribe("showresults");
  Meteor.subscribe("allquestions");
  return {
    currentUser: Meteor.user(),
    scores: Scores.find({ points: { $gt: 1 } }).fetch(),
    questionAnswer: Questions.findOne(),
    users: Meteor.users.find().fetch(),
    showResultPage: ShowResult.findOne(),
    allQuestions: allQuestions.find().fetch()
  };
})(ComputerScienceContainer);

export default CSContainer;
