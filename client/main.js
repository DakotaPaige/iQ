import React, { Component } from "react";
import ComputerScienceQuestion from "../imports/ui/containers/ComputerScienceQuestion";
import FilmQuestion from "../imports/ui/containers/FilmQuestion";
import GeneralKQuestion from "../imports/ui/containers/GeneralKQuestion";
import ScienceNatureQuestion from "../imports/ui/containers/ScienceNatureQuestion";
import { Meteor } from "meteor/meteor";
import HomePage from "../imports/ui/containers/HomePage";
import Score from "../imports/ui/containers/Score";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainMenu from "../imports/ui/components/MainMenu";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // isClicked: false
    };
  }

  render() {
    let buttonClicked = () =>
      this.setState({ isClicked: !this.state.isClicked });
    return (
      <div className="App" style={{ width: "90%" }}>
        <Router>
          <div>
            <MainMenu />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/Computer-Science"
                component={ComputerScienceQuestion}
              />
              <Route exact path="/Film" component={FilmQuestion} />
              <Route
                exact
                path="/General-Knowledge"
                component={GeneralKQuestion}
              />
              <Route
                exact
                path="/Science-Nature"
                component={ScienceNatureQuestion}
              />
              <Route exact path="/Score" component={Score} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
