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
import { Questions } from "../imports/api/questions";
import Leaderboard from "../imports/ui/containers/Leaderboard";
import { Scores } from "../imports/api/scores";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

import Routes from "../imports/routes";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // addScore() {
  //   const newScore = {
  //     user: Meteor.userId(),
  //     points: "hi"
  //   };
  //   Meteor.call("scores.addScore", newScore);
  // }

  render() {
    return (
      <div className="App" style={{ width: "90%" }}>
        <div className="hero-container">
          <h1 className="modal-title">iQ</h1>
          <AccountsUIWrapper />
        </div>
        <Router>
          <div>
            <MainMenu />
            <Routes />
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
