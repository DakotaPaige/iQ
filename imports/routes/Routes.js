import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../ui/containers/HomePage";
import FilmQuestion from "../ui/containers/FilmQuestion";
import GeneralKQuestion from "../ui/containers/GeneralKQuestion";
import ComputerScienceQuestion from "../ui/containers/ComputerScienceQuestion";
import ScienceNatureQuestion from "../ui/containers/ScienceNatureQuestion";
import Score from "../ui/containers/Score";
import Leaderboard from "../ui/containers/Leaderboard";

import PrivateLeaderboard from "./PrivateLeaderboard";
import PrivateComputer from "./PrivateComputer";
import PrivateFilm from "./PrivateFilm";
import PrivateGeneral from "./PrivateGeneral";
import PrivateScience from "./PrivateScience";
import PrivateScore from "./PrivateScore";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <PrivateComputer
        exact
        path="/Computer-Science"
        component={ComputerScienceQuestion}
        userId={props.currentUserId}
        user={props.currentUser}
        // render={() => console.log("hello")}
      />
      <PrivateFilm
        exact
        path="/Film"
        component={FilmQuestion}
        userId={props.currentUserId}
        user={props.currentUser}
      />
      <PrivateGeneral
        exact
        path="/General-Knowledge"
        component={GeneralKQuestion}
        userId={props.currentUserId}
        user={props.currentUser}
      />
      <PrivateScience
        exact
        path="/Science-Nature"
        component={ScienceNatureQuestion}
        userId={props.currentUserId}
        user={props.currentUser}
      />
      <PrivateScore
        exact
        path="/Score"
        component={Score}
        userId={props.currentUserId}
        user={props.currentUser}
      />
      <PrivateLeaderboard
        exact
        path="/Leaderboard"
        component={Leaderboard}
        userId={props.currentUserId}
        user={props.currentUser}
      />
      {/* <Route exact path="/Leaderboard" render={props => <Leaderboard />} /> */}
    </Switch>
  );
};

export default Routes;
