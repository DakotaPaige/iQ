import React, { Component } from "react";
import Question from "../imports/ui/containers/Question";
import Question2 from "../imports/ui/containers/Question-2";
import Question3 from "../imports/ui/containers/Question-3";
import Question4 from "../imports/ui/containers/Question-4";
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
              <Route exact path="/Film" component={Question} />
              <Route exact path="/Sports" component={Question2} />
              <Route exact path="/Mythology" component={Question3} />
              <Route exact path="/History" component={Question4} />
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
