import React, { Component } from "react";
import Questionss from "./Questions";
import Score from "../Score";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { QuizResults } from "../../../api/quizresults";
import QuestionResult from "./QuestionResult";
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
      showQuestion: false,
      isCorrectAnswer: true
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

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
    // Meteor.call("scores.setScore", score);
  }
  showQuestion() {
    this.setState({ showQuestion: true });
  }

  showQuestions() {
    this.setState({ showQuestion: false });
    Meteor.call("questions.dropData");
    this.setState({ isCorrect: false });
  }
  isCorrect() {
    this.setState({ isCorrectAnswer: true });
  }
  isIncorrect() {
    this.setState({ isCorrectAnswer: false });
  }

  goBackHome() {
    Meteor.call("scores.dropData");
    Meteor.call("questions.dropData");
    Meteor.call("quizresults.dropData");
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
          <p>It is Loading</p>
        ) : (
          <div>
            {this.state.current == 10 ? (
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
            ) : this.state.showQuestion == false ? (
              <Questionss
                setScore={this.setScore.bind(this)}
                current={this.state.current}
                setCurrent={this.setCurrent.bind(this)}
                addQuestions={this.addQuestions.bind(this)}
                allQuestions={this.state.allQuestions}
                score={this.state.score}
                answer={this.state.answer}
                incorrectAnswer={this.state.incorrectAnswer}
                // addScore={this.addScore.bind(this)}
                // plusScore={this.plusScore.bind(this)}
                showQuestion={this.showQuestion.bind(this)}
                // showQuestions={this.showQuestions.bind(this)}
                showQ={this.state.showQuestion}
                isCorrectAnswer={this.state.isCorrectAnswer}
                isCorrect={this.isCorrect.bind(this)}
                isIncorrect={this.isIncorrect.bind(this)}
              />
            ) : (
              <QuestionResult
                showQuestions={this.showQuestions.bind(this)}
                isCorrectAnswer={this.state.isCorrectAnswer}
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
  return {
    scores: Scores.find({ points: { $gt: 1 } }).fetch()
  };
})(ComputerScienceContainer);

export default CSContainer;

// for(let i =1; i <= 11; i++){
//   if(i==11 && i %2 !== 0){
//     console.log("its magic");
//   }else if(i %2 ==0){
//     console.log("its even");
//   }else if(i%2 !==0){
//     console.log("its odd");
//   }
// }
