import React, { Component } from "react";
import ComputerScienceQuestion from "../imports/ui/containers/ComputerScienceQuestion";
import FilmQuestion from "../imports/ui/containers/FilmQuestion";
import GeneralKQuestion from "../imports/ui/containers/GeneralKQuestion";
import ScienceNatureQuestion from "../imports/ui/containers/ScienceNatureQuestion";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import HomePage from "../imports/ui/containers/HomePage";
import Score from "../imports/ui/containers/Score";
import { Router, Route, Link, Switch, withRouter } from "react-router-dom";
import MainMenu from "../imports/ui/components/MainMenu";
import ReactDOM from "react-dom";
import AccountsUIWrapper from "../imports/ui/components/AccountsWrapper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "../imports/start-up/accounts-config.js";
import { Questions } from "../imports/api/questions";
import Leaderboard from "../imports/ui/containers/Leaderboard";
import { Scores } from "../imports/api/scores";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
import history from "../imports/history";
import { Button } from "reactstrap";
import QuizResultsContainer from "../imports/ui/components/QuizResultMessage";
import LoggedInUsers from "../imports/ui/components/LoggedInUsers";
import MessageList from "../imports/ui/containers/Chat/MessageList";
import Routes from "../imports/routes";

import iQLogo from "../imports/images/iQ-logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log("COMING FROM MAIN: ", this.props);
    return (
      <MuiThemeProvider>
        <div>
          <Router history={history}>
            <div className="App">
              <Link to="/" className="iq-logo">
                <h1>
                  <img src={iQLogo} alt="iQ logo" className="main-logo" />
                </h1>
              </Link>
              <div>
                {window.location.href.includes("/login") ? (
                  <p> </p>
                ) : (
                  <AccountsUIWrapper />
                )}
                <LoggedInUsers />
                {/* <MainMenu /> */}
                <Routes
                  currentUser={this.props.currentUser}
                  currentUserId={this.props.currentUserId}
                />
                <MessageList />
              </div>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
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
