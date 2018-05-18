import React, { Component } from "react";
import ComputerScienceQuestion from "../imports/ui/containers/ComputerScienceQuestion";
import FilmQuestion from "../imports/ui/containers/FilmQuestion";
import GeneralKQuestion from "../imports/ui/containers/GeneralKQuestion";
import ScienceNatureQuestion from "../imports/ui/containers/ScienceNatureQuestion";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import HomePage from "../imports/ui/containers/HomePage";
import Score from "../imports/ui/containers/Score";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainMenu from "../imports/ui/components/MainMenu";
import ReactDOM from "react-dom";
import AccountsUIWrapper from "../imports/ui/components/AccountsWrapper";
import "../imports/start-up/accounts-config.js";
import { Questions } from "../imports/api/questions";
import Leaderboard from "../imports/ui/containers/Leaderboard";
import { Scores } from "../imports/api/scores";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import QuizResultsContainer from "../imports/ui/components/QuizResultMessage";

import LoggedInUsers from "../imports/ui/components/LoggedInUsers";

import Routes from "../imports/routes";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1 className="modal-title">iQ</h1>
        <AccountsUIWrapper />
        <LoggedInUsers />
        <Router>
          <div>
            <MainMenu />
            <Routes
              currentUser={this.props.currentUser}
              currentUserId={this.props.currentUserId}
            />
          </div>
        </Router>
      </div>
    );
  }
}

const AppContainer = withTracker(() => {
  Meteor.subscribe("users");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    users: Meteor.users.find().fetch()
  };
})(App);

Meteor.startup(() => {
  ReactDOM.render(<AppContainer />, document.getElementById("root"));
});
